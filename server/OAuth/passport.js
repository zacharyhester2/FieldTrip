const mongoose = require('mongoose');
// const findOrCreate = require('mongoose-findorcreate')
const passport = require('passport');
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const Users = require('../../server/database/schema.js');


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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