const express = require("express");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');


const app = express();
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
  }, (accessToken, refreshToken,profile,done) => {
    console.log('accessToken', accessToken);
    console.log('refreshToken',refreshToken);
    console.log('profile',profile);
    }
  )
);

// client-id 929951212884-s07g24p8urh1fc5gpmin7mk58jphdkqb.apps.googleusercontent.com  public token
// client-secret a3X0WSYEdkVs9oSKXegN84fo private token


// app.get("/", (req, res) => {
//   res.send({ hello: "world" });
// });

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile','email']
  })
);


app.get('/auth/google/callback', passport.authenticate('google'));


const PORT = process.env.PORT ||  5000;

app.listen(PORT);
