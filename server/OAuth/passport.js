const mongoose = require('mongoose');
// const findOrCreate = require('mongoose-findorcreate')
const passport = require('passport');
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const Users = require('../../server/database/schema.js');


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // callbackURL: "http://ec2-54-236-56-91.compute-1.amazonaws.com:3000/auth/google/callback",
  callbackURL: "/auth/google/callback",
  // passReqToCallback : true
},
(accessToken, refreshToken, profile, done) => {
  done(null, profile);
  // Users.find({ googleId: profile.id }, function (err, user) {
  //   return done(err, user);
  // });
}
));

module.exports = {
  GoogleStrategy,
};