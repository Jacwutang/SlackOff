const passport = require('passport');

module.exports = (app) => {

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile','email']
    })
  );

  app.post('/local-signup', passport.authenticate('local-signup', {
       successRedirect : '/messages', // redirect to the secure profile section
       failureRedirect : '/session/signup', // redirect back to the signup page if there is an error
       failureFlash : true // allow flash messages
   }));

  app.get('/auth/google/callback', passport.authenticate('google'),
  (req,res) => {
    res.redirect('/messages');

  });

  app.get('/api/logout', (req,res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req,res) => {

    res.send(req.user);
  })

};

// Notes:
// passport.authenticate triggers our local
// 'strategy'. Proceed to GoogleStrategy in passport.js
