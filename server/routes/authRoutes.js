const passport = require('passport');

module.exports = (app) => {

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile','email']
    })
  );





  app.post('/api/local-login', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    if (err){

      return next(err);
    }
    if (!user){
      

      return res.status(403).send(info);
    }
    req.logIn(user, function(err) {
      if (err){

        return next(err);
      }
      let newUser = {};
      newUser.username = req.user.local.username;
      newUser.id = req.user._id;

      res.send({local:newUser});

    });

    })(req, res, next);
  });


  app.post('/api/local-signup', function(req, res, next) {
  passport.authenticate('local-signup', function(err, user, info) {
    if (err){
      // ("error");
      return next(err);
    }

    if (!user){
      // (info)
      return res.status(401).send(info);
    }
    req.logIn(user, function(err) {
      if (err){
        ("error login");
        return next(err);
      }

      let newUser = {};
      newUser.username = req.user.local.username;
      newUser.id = req.user._id;
      res.send({local:newUser});


    });
    })(req, res, next);
  });


  app.get('/auth/google/callback', passport.authenticate('google'),
  (req,res) => {
    // res.redirect('/messages');
    res.redirect('/messages');


  });

  app.get('/api/logout', (req,res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req,res) => {

    if(!req.user){

      return res.send(null);
    }

    let user = {};
    user.id = req.user._id;

    if(req.user.google.displayName){
      user.displayName = req.user.google.displayName;
      // ("GOOGLE USER SENT BACK")
      return res.send({google:user});
    } else{
      user.username = req.user.local.username;
      // ("LOCAL USER SENT BACK")
      return res.send({local:user});
    }
  });

};
 // pkill -f node
