const passport = require('passport');

module.exports = (app) => {

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile','email']
    })
  );

  // app.post('/api/local-signup', (req,res) => {
  //   passport.authenticate('local-signup', (err,user,info) => {
  //     console.log("SOMETHING WENT WRONG")
  //     console.log(req,user);
  //     console.log(err,user,info);
  //     if(!user){
  //       // console.log("SOMETHING WENT WRONG")
  //       res.send(401,info);
  //
  //     } else{
  //       let user = {};
  //       user.username =  req.user.local.username;
  //       user.id = req.user._id;
  //
  //       res.send(user);
  //     }})
  //   });

  app.post('/api/local-signup',(req,res) => {
    passport.authenticate('local-signup', (err,user,info) => {
      if(user){
        res.send({error:info});
      } else{
        let user = {};
        user.username =  req.user.local.username;
        user.id = req.user._id;
        res.send(user);
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

    res.send(req.user);
  })

};

// Notes:
// passport.authenticate triggers our local
// 'strategy'. Proceed to GoogleStrategy in passport.js
