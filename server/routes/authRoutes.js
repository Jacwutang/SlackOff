const passport = require('passport');

module.exports = (app) => {

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile','email']
    })
  );


  app.post('/api/local-signup',(req,res) => {
    passport.authenticate('local-signup', (err,user,info) => {
      if(info){
        res.send({error:info});
      } else{
        let sessionUser = {};

        sessionUser.username =  user.local.username;
        sessionUser.id = user._id;
        res.send({local:sessionUser});
      }

      })(req,res);
    });

    app.post('/api/local-login', (req,res) => {
      passport.authenticate('local-login', (err,user,info) => {
        if(!user){
          res.send({error:info});
        } else{
          let sessionUser = {};
          sessionUser.username = user.local.username;
          sessionUser.id = user._id;
          return res.send({local: sessionUser});

        }

      })(req,res);
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
      // console.log(req);
      // console.log("session obj", req.session);
      if(req.user === undefined){
        return res.send(null);
      }


      let obj = req.user._doc;

      let user = {};
      user.id = obj._id;

      switch(true){
        case(Object.values(obj.google).length > 1):
          user.displayName = obj.google.displayName;
          return res.send({google:user});
        default:
        user.local.username = obj.local.username;
        return res.send({local:user});

      }


  });

};
 // pkill -f node
