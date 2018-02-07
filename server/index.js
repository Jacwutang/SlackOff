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
  }, (accessToken) => {
    console.log(accessToken);
  })
);

// client-id 929951212884-s07g24p8urh1fc5gpmin7mk58jphdkqb.apps.googleusercontent.com  public token
// client-secret a3X0WSYEdkVs9oSKXegN84fo private token


app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
