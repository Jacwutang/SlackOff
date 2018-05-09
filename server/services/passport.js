const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy   = require('passport-local').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


const User = mongoose.model('User');


// turns user instance into cookie
//Sets cookie
passport.serializeUser((user,done) => {
  // uses id assigned by mongoDB
  // The cookie id is user's id. But is encrypted to something else.

  return done(null, user.id);
});


// find user by unique id
// convert into user obj
passport.deserializeUser( (id,done) => {

  return User.findById(id)
    .then(user => done(null,user));
});

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

passport.use('local-signup', new LocalStrategy({

        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, username, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        ("LOCAL-SIGNUP")
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.username' :  username }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that username
            if (user) {
                ("ALREADY THIS USER")
                // return done(null, false, req.flash('signupMessage', 'That username is already taken.'));

                return done(null,false,{message: 'Username already exists'});
                // return res.status(401).json("Incorrect email or password1")
            } else {
              ("SIGNUP PORTION REACHED")
                // if there is no user with that username
                // create the user
                var newUser  = new User();

                // set the user's local credentials
                newUser.local.username    = username;
                newUser.local.password = newUser.generateHash(password);

                // save the user
                newUser.save(function(err) {
                    if (err){
                      throw err;
                    } else{
                      ("saved user")
                        return done(null, newUser);
                    }


                });
            }

        });

        });

  }));

  passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {

        User.findOne({ 'local.username' :  username }, function(err, user) {

            if (err){

              return done(err);
            }


            // if no user is found, return the message
            if (!user){

              return done(null, false, {message:"No user found"});

            }


            // if the user is found but the password is wrong
            if (!user.validPassword(password)){

              return done(null, false, {message: "Incorrect password"});

            }

            // all is well, return successful user
            // ("WE FOUND YOU RETURN USER")
            return done(null, user);
        });

    }));






passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, async (accessToken, refreshToken,profile,done) => {

      const existingUser = await User.findOne({ 'google.googleId': profile.id })

            if(existingUser){
              done(null, existingUser);
            } else{
                const user =  new User();
                user.google.googleId = profile.id;
                user.google.displayName = profile.displayName;

                user.save(function(err) {
                    if (err){
                      throw err;
                    } else{
                        return done(null, user);
                    }
                });
            }
        })
);
