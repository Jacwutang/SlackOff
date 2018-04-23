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
        let user = {};
        user.username =  req.user.local.username;
        user.id = req.user._id;
        res.send(user);
      }

      })(req,res);
    });

    app.post('/api/local-login', (req,res) => {
      passport.authenticate('local-login', (err,user,info) => {
        if(!user){
          res.send({error:info});
        } else{
          let newUser = {};
          newUser.username = user.local.username;
          newUser.id = user._id;
          return res.send({local: newUser});

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
      
      if(req.user === undefined){
        console.log("null user");
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
