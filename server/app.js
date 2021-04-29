const path = require('path');
require('dotenv').config()
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const axios = require('axios');
require('./OAuth/passport.js');

//DB
require('../server/database/index.js');
const { Users, Resources, Badges } = require('../server/database/schema.js');


const app = express();
app.use(express.json());
app.use('/', express.static(CLIENT_PATH));
app.use(cookieParser());
// app.use(express.urlencoded({extended: false}))

//KEYS
const newsKey = process.env.NEWS_KEY;
const smithKey = process.env.SMITH_KEY;
const nasaKey = process.env.NASA_KEY;

let userInfo = null;

// const youtubeApi = process.env.YOUTUBE_API_KEY;

// NASA PotD - return title, url, explanation (SOMETIMES VIDEO)
const nasaPotD = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;

app.get('/nasaPic', (req, res) => {

    axios.get(nasaPotD)
    .then(({data: {title, url, explanation}}) =>{
      res.status(200).send({title, url, explanation});
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//SMITHSONIAN SEARCH - *very little documentation on API*

const smithQ = 'iris';  //hard search data, will change once front end
const smith = `https://api.si.edu/openaccess/api/v1.0/search?q=${smithQ}&api_key=${smithKey}`;

app.get('/smithQ/:search', (req, res) => {

    axios.get(smith)
    .then(({data}) =>{
      res.status(200).send({data});
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

const newsQ = 'the lost cosmonauts';
const sortBy = 'popularity' //maybe give users the options: relevancy, popularity, publishedAt
const news = `https://newsapi.org/v2/everything?q=${newsQ}&apiKey=${newsKey}&sortBy=${sortBy}`;

app.get('/newsQ/:search', (req, res) => {

    axios.get(news)
    .then(({data}) =>{
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//OAUTH STUFF

app.use(
  session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    saveUninitialized: false,
    resave: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/logout' }),
    (req, res) => {
      // console.log(req.user, 'REQ DOT USER')
      const newUser = new Users({
        id: req.user.id,
        name: req.user.displayName,
      });
      res.cookie('FieldTripId', req.user.id);
      Users.findOne({ id: req.user.id }).then((data) => {
        if (data) {
          userInfo = data;
          res.redirect('/');
        } else {
          newUser.save().then(() => {
            userInfo = newUser;
            res.redirect('/');
          });
        }
      });
    },
  );

  app.get('/user', (req, res) => {
    Users.findOne({ id: req.cookies.FieldTripId }).then((userInfo) => {
      res.send(userInfo);
    });
  });

  // app.get('/users', (req, res) => {
  //   Users.find()
  //     .then((data) => res.status(200).json(data))
  //     .catch();
  // });

  app.get('/logout', (req, res) => {
    userInfo = null;
    res.clearCookie('FieldTripId');
    res.status(200).json(userInfo);
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(CLIENT_PATH, 'index.html'))
  })


module.exports = {
    app,
  };
