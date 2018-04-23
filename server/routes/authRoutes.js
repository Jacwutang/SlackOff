const passport = require('passport');

module.exports = (app) => {

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile','email']
    })
  );


  // app.post('/api/local-signup',(req,res) => {
  //   passport.authenticate('local-signup', (err,user,info) => {
  //     if(info){
  //       res.send({error:info});
  //     } else{
  //       let sessionUser = {};
  //
  //       sessionUser.username =  user.local.username;
  //       sessionUser.id = user._id;
  //       res.send({local:sessionUser});
  //     }
  //
  //     })(req,res);
  //   });
  app.post('/api/local-signup',
  passport.authenticate('local-signup',{failureFlash: true}),
  function(req, res) {
    console.log("successful");
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.

    // if(req.session.flash){
    //   console.log(req.session.flash);
    // }

    // let newUser = {};
    // newUser.username = req.user.local.username;
    // newUser.id = req.user._id;
    // res.send({local:newUser});
  });




  // app.post('/api/local-login',
  // passport.authenticate('local-login',
  // { failureRedirect: '/login',failureFlash : true}),
  // function(req, res) {
  //   // If this function gets called, authentication was successful.
  //   // `req.user` contains the authenticated user.
  //
  //   let newUser = {};
  //   newUser.username = req.user.local.username;
  //   newUser.id = req.user._id;
  //   res.send({local:newUser});
  //
  // });

  app.post('/api/local-login', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    if (err){
      console.log("error");
      return next(err);
    }
    if (!user){
      console.log(info)
      return res.send(info);
    }
    req.logIn(user, function(err) {
      if (err){
        console.log("error login");
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
      console.log("error");
      return next(err);
    }
    if (!user){
      console.log(info)
      return res.send(info);
    }
    req.logIn(user, function(err) {
      if (err){
        console.log("error login");
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
      return res.send({google:user});
    } else{
      user.username = req.user.local.username;
      return res.send({local:user});
    }
  });

};
 // pkill -f node
