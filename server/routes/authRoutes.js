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
  passport.authenticate('local-signup'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    let newUser = {};
    newUser.username = req.user.local.username;
    newUser.id = req.user._id;
    res.send({local:newUser});
  });


  app.post('/api/local-login',
  passport.authenticate('local-login'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    let newUser = {};
    newUser.username = req.user.local.username;
    newUser.id = req.user._id;
    res.send({local:newUser});

  });


    // app.post('/api/local-login', (req,res) => {
    //   passport.authenticate('local-login', (err,user,info) => {
    //     if(!user){
    //       res.send({error:info});
    //     } else{
    //       let sessionUser = {};
    //       sessionUser.username = user.local.username;
    //       sessionUser.id = user._id;
    //       return res.send({local: sessionUser});
    //
    //     }
    //
    //   })(req,res);
    // });







  app.get('/auth/google/callback', passport.authenticate('google'),
  (req,res) => {
    res.redirect('/messages');

  });

  app.get('/api/logout', (req,res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req,res) => {
    console.log(req.user,"REQ>USER");
    if(!req.user){
      return res.send(null);
    }

    let user = {};
    user.id = req.user._id;
    console.log(req,"REQUEST");
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


 // app.get('/api/current_user', (req,res) => {
 //
 //     if(req.user === undefined){
 //       return res.send(null);
 //     }
 //
 //
 //     let obj = req.user._doc;
 //
 //     let user = {};
 //     user.id = obj._id;
 //
 //     switch(true){
 //       case(Object.values(obj.google).length > 1):
 //         user.displayName = obj.google.displayName;
 //         return res.send({google:user});
 //       default:
 //       user.local.username = obj.local.username;
 //       return res.send({local:user});
 //
 //     }
 //
 //
 // });
