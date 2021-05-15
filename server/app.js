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
// const { cloudinary } = require('./utils/cloudinary')
require('./OAuth/passport.js');
require('dotenv').config()

//DB
require('../server/database/index.js');
const { Users, Resources, Badges } = require('../server/database/schema.js');


const app = express();
app.use(express.json({ limit: '50mb'}));
app.use('/', express.static(CLIENT_PATH));
app.use(cookieParser());
app.use(express.urlencoded({limit: '50mb', extended: true}))

//KEYS
const newsKey = process.env.NEWS_KEY;
const smithKey = process.env.SMITH_KEY;
const nasaKey = process.env.NASA_KEY;
const ClientId = process.env.ClientId;
const ClientSecret = process.env.ClientSecret;
const youTubeKey = process.env.YOUTUBE_KEY;

let userInfo = null;

const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,

})

// const youtubeApi = process.env.YOUTUBE_API_KEY;

//AXIOS ALL SIMULTANEOUS SEARCH

// const smith = `https://api.si.edu/openaccess/api/v1.0/search?q=${smithQ}&api_key=${smithKey}`;

//YOUTUBE

app.get('/youTube/:query', (req, res) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${req.params.query}documentary&type=video&videoDuration=medium&key=${youTubeKey}`;
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

// const newsQ = 'the lost cosmonauts';
const sortBy = 'relevance' //maybe give users the options: relevancy, popularity, publishedAt
// const news = `https://newsapi.org/v2/everything?q=${newsQ}&apiKey=${newsKey}&sortBy=${sortBy}`;

app.get('/newsQ/:search', (req, res) => {

    axios.get(`https://newsapi.org/v2/everything?q=${req.params.search}&apiKey=${newsKey}&sortBy=${sortBy}`)
    .then(({data}) => {
      res.status(200).send(data.articles.slice(0,9));
      console.log(req.params.search, 'SEARCH');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//DAILY NEWS TICKER
// https://newsapi.org/v2/top-headlines?category=science&apiKey=6c070f451e104b78b4c8a13bbe279def&country=us

app.get('/ticker', (req, res) => {

  axios.get(`https://newsapi.org/v2/top-headlines?category=science&apiKey=${newsKey}&country=us`)
  .then(({data}) => {
    res.status(200).send(data.articles);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

//CHALLENGES
app.get('/challenge', (req, res) => {
  Users.findOne({ id: req.params.id }).then((userInfo) => {
    res.send(userInfo.challenges);
  });
})

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
app.get('/auth/google/callback',
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
  //USED FOR BADGE D3 DATA AS WELL
  app.get('/user/:id', (req, res) => {
    Users.findOne({ id: req.params.id }).then((userInfo) => {
      // console.log(userInfo.stamps, 'STAMPS INFO');
      res.send(userInfo.stamps);
    });
  });

  app.get('/saved/:id', (req, res) => {
    Users.findOne({ id: req.params.id }).then((userInfo) => {
      res.send(userInfo.saved);
    });
  });

  // removes duplicates from stamps array which contains both trophies and stamps
  const uniqueStamp = (array) => {
      //flags is stamp/challenge that we want
      let flags = [], output = [];
      const trophy = [];
      const stamp = [];
      array.forEach(object => {
        object.category === 'daily challenge' ?
          trophy.push(object) :
          stamp.push(object);
        });
      for(let i = 0; i < trophy.length; i++) {
        if(flags[trophy[i].date]) continue;
          flags[trophy[i].date] = true;
          output.push(trophy[i]);
        }
      for(let j = 0; j < stamp.length; j++) {
        if(flags[stamp[j].title]) continue;
          flags[stamp[j].title] = true;
          output.push(stamp[j]);
        }
      output = output.filter(item => item !== null);
      // console.log('output', output)
      return output;
  };

  //RESOURCES GET REQUEST FOR BADGES

  // app.get('/resource', (req, res) => {
  //   Users.findOne({ id: req.cookies.FieldTripId })
  //   .then((stamps) => {
  //     res.send(stamps);
  //   })
  //   .then((badgeInfo)=> {
  //     Resources.find({badeInfo}) => {


  //   };
  // });

  //post request -add resource to resource schema
  app.post('/resource', (req, res) => {
    const {category, date, title, author, image, url, type } = req.body;
    // console.log('req body', req.body)

    Users.findOne({ id : req.cookies.FieldTripId })
    .then((user) => {
      userInfo = user;
      Resources.create({
        category: category,
        date: date,
        title: title,
        author: author,
        image: image,
        url: url,
        type: type
      })
      .then((resource)=>{
        // console.log('RESOURCE FROM /resource', resource)
          Users.findOne({ id : req.cookies.FieldTripId })
          .then((user) => {
            user.stamps = [...user.stamps, resource];

            Users.updateOne({ id : req.cookies.FieldTripId }, {stamps: uniqueStamp(user.stamps)})
            .then(() => res.sendStatus(200))
            .catch()
          })
        })
  })
  })


  // DAILY CHALLENGE- adds challenges to stamps
app.post('/challenge', (req, res) => {
  const { title, category, date } = req.body;
  Users.findOne({ id: req.cookies.FieldTripId })
    .then((user) => {

      user.challenges = [...user.challenges, {title: title, category: category, date: date}];
      user.stamps = [...user.stamps, {title: title, category: category, date: date}];

      // removes duplicates from challenges array
      const uniqueChallenge = (array) => {
        let flags = [], output = [];
        for(let i = 0; i < array.length; i++) {
          if(flags[array[i].date]) continue;
          flags[array[i].date] = true;
          output.push(array[i]);
        }
        output = output.filter(item => item !== null);
        return output;
      };

      Users.updateOne({ id : req.cookies.FieldTripId }, {stamps: uniqueStamp(user.stamps), challenges: uniqueChallenge(user.challenges)})
      .then((data) => res.sendStatus(200))
      .catch()
    })
});


// SAVED/FAVORITES/READorWATCH LATER
app.post('/saved', (req, res) => {
  const { category, date, title, author, image, url, type } = req.body;
  Users.findOne({ id: req.cookies.FieldTripId })
    .then((user) => {
      user.saved = [...user.saved, { category: category, date: date, title: title, author: author, image: image, url: url, type: type }]

      Users.updateOne({ id : req.cookies.FieldTripId }, {saved: user.saved})
        .then((data) => res.sendStatus(200))
        .catch()
    })
});

// DELETE FROM SAVED
app.delete('/delete', (req, res) => {
     Users.findOne({ id: req.cookies.FieldTripId })
      .then((user) => {
        console.log('REQ BODY TITLE', req.body.title);
      user.update({ $pull: { 'saved': { title: req.body.title }}})
          .then((data) => { console.log('DATA', data); res.status(200).json({ success: true, message: 'saved resource was deleted' })})
          .catch();
      })
      .catch();
});


//SPOTIFY



  app.get('/logout', (req, res) => {
    userInfo = null;
    res.clearCookie('FieldTripId');
    res.status(200).json(userInfo);
  });

  //CLOUDINARY

  app.post('/api/upload', async (req, res) => {
    try {
      const fileStr = req.body.data;
      // console.log('CLOUDINARYYYYY', cloudinary);
      const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'testImages'
      })
      console.log('HAAAAAAAIII');
      res.json({msg: "yaaay"})

    }catch (error) {
      console.log('ERROR FROM UPLOAD', error)
      res.status(500).json({err: 'something wrong!'})
    }
  })

  app.get('/api/images', async (req, res) => {
    console.log('YOU MADE IT TO IMAGE UPLOAD')
    try{
      const {resources} = await cloudinary.search.expression('folder:testImages/*')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

        const publicIds = resources.map( file => {
          // console.log('----file------', file)
          return file.public_id});
          // console.log('publicIds------------', publicIds, )
        res.status(200).json(publicIds);
    } catch(error) {
      console.log('Error was thrown: ', error)
      res.sendStatus(404).send(error);
    }
  })

  //avatar
  app.post('/avatar/:id', (req, res) => {
    const { avatar } = req.body;

    Users.findOne({ id: req.cookies.FieldTripId })
      .then((user) => {
        user.avatar = avatar;
        Users.updateOne({ id : req.cookies.FieldTripId }, {avatar: user.avatar})
          .then((data) => {
            res.sendStatus(200)})
          .catch()
      })
  })

  app.get('/avatar/:id', (req, res) => {
    Users.findOne({ id: req.cookies.FieldTripId })
    .then((userInfo) => {
      res.send(userInfo.avatar);
    });
  })

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(CLIENT_PATH, 'index.html'))
  })

module.exports = {
    app,
  };
