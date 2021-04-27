const path = require('path');
const express = require('express');
const passport = require('passport');
require('./OAuth/passport.js');
const session = require('express-session');
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const axios = require('axios');
require('dotenv').config()



//DB
require('../server/database/index.js');
const { Users, Resources, Badges } = require('../server/database/schema.js');


const app = express();
app.use(express.json());
app.use(express.static(CLIENT_PATH));

//KEYS
const newsKey = process.env.NEWS_KEY;
const smithKey = process.env.SMITH_KEY;
const nasaKey = process.env.NASA_KEY;

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

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));


app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    console.log('requesttttt from auth callback', req);
    // const newUser = new Users({
    //   id: req.user.id,
    //   name: req.user.name,
    // });
    // Users.findOne({ id: req.user.id }).then((data) => {
    //   if (data) {
        // res.redirect('/');
    //     userInfo = data;
    //   } else {
    //     newUser.save().then(() => {
    //       userInfo = newUser;
    //       res.redirect('/');
    //     });
    //   }
    // });
  });


module.exports = {
    app,
  };
