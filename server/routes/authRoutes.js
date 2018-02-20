const passport = require('passport');

module.exports = (app) => {

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile','email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'),
  (req,res) => {
    res.redirect('/channels');

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
