const path = require('path');
require('dotenv').config()
const express = require('express');
const passport = require('passport');
require('./OAuth/passport.js');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const mongoose = require('mongoose');
const axios = require('axios');
require('./OAuth/passport.js');
require('dotenv').config()

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
const ClientId = process.env.ClientId;
const ClientSecret = process.env.ClientSecret;
const youTubeKey = process.env.YOUTUBE_KEY;

let userInfo = null;

// const youtubeApi = process.env.YOUTUBE_API_KEY;

//AXIOS ALL SIMULTANEOUS SEARCH

// const smith = `https://api.si.edu/openaccess/api/v1.0/search?q=${smithQ}&api_key=${smithKey}`;

//YOUTUBE

app.get('/youTube/:query', (req, res) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${req.params.query}documentary&channelType=any&key=${youTubeKey}`;
  return axios(url)
    .then(({ data }) => data.items.slice(0, 5))
    .then((data) => res.status(200).send(data))
    .catch();
});


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

//NASA QUERY PIC

//SMITHSONIAN SEARCH - *very little documentation on API*
//SMITH PLANT
const plantSmithQ = 'Plants';  //hard search data, will change once front end
const plantSmithUrl = `https://api.si.edu/openaccess/api/v1.0/search?q=${plantSmithQ}&api_key=${smithKey}`;

app.get('/plantSmith', (req, res) => {

    axios.get(plantSmithUrl)
    .then(({data}) =>{
      res.status(200).send({data});
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
//SMITH SPACE
const spaceSmithQ = 'Space'; 
const smithSpaceUrl = `https://api.si.edu/openaccess/api/v1.0/search?q=${spaceSmithQ}&api_key=${smithKey}`;

app.get('/spaceSmith', (req, res) => {

    axios.get(smithSpaceUrl)
    .then(({data}) =>{
      res.status(200).send({data});
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
//SMITH NAT HISTORY
const natHistorySmithQ = 'Natural History'; 
const natHistorySmithUrl = `https://api.si.edu/openaccess/api/v1.0/search?q=${natHistorySmithQ}&api_key=${smithKey}`;

app.get('/natHistorySmith', (req, res) => {

    axios.get(natHistorySmithUrl)
    .then(({data}) =>{
      res.status(200).send({data});
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// const newsQ = 'the lost cosmonauts';
const sortBy = 'relevance' //maybe give users the options: relevancy, popularity, publishedAt
// const news = `https://newsapi.org/v2/everything?q=${newsQ}&apiKey=${newsKey}&sortBy=${sortBy}`;

app.get('/newsQ/:search', (req, res) => {

    axios.get(`https://newsapi.org/v2/everything?q=${req.params.search}&apiKey=${newsKey}&sortBy=${sortBy}`)
    .then(({data}) => {
      res.status(200).send(data.articles.slice(0,6));
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

  //STAMPS
  app.get('/user/:id', (req, res) => {
    Users.findOne({ id: req.params.id }).then((userInfo) => {
      res.send(userInfo.stamps);
    });
  });

  //post request -add resource to resource schema
  app.post('/resource', (req, res) => {
    const {category, date, title, author, image, url, userId} = req.body;

    Users.findOne({ id : req.cookies.FieldTripId })
    .then((user) => {
      userInfo = user;
      Resources.create({
        category: category,
        date: date,
        title: title,
        author: author,
        image: image,
        url: url
      })
      .then((resource)=>{
          Users.findOne({ id : req.cookies.FieldTripId })
          .then((user) => {
            user.stamps = [...user.stamps, resource.image];

            Users.updateOne({ id : req.cookies.FieldTripId }, {stamps: user.stamps})
            .then(() => res.sendStatus(200))
            .catch()
          })
        })
  })
  })


//SPOTIFY


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
