const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


const User = mongoose.model('User');


// turns user instance into cookie
//Sets cookie
passport.serializeUser((user,done) => {
  // uses id assigned by mongoDB
  // The cookie id is user's id. But is encrypted to something else.
  done(null, user.id);
});


// find user by unique id
// convert into user obj
passport.deserializeUser( (id,done) => {
  User.findById(id)
    .then(user => done(null,user));
});




passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, async (accessToken, refreshToken,profile,done) => {
      //returns promise
      const existingUser = await User.findOne({ googleId: profile.id })

            if(existingUser){
              //1st arg error obj, 2nd user obj
              done(null, existingUser);
            } else{
                const user = await new User({ googleId: profile.id, displayName: profile.displayName}).save()
                done(null,user);
            }
        })

);
