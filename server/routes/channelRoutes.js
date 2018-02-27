module.exports = (app) => {

  app.get('/messages/channel/new', (req,res) => {
      console.log("HERE");
      console.log(req.user);
  });


  app.get('/messages/direct/new', (req,res) => {

  });

  // app.get('/messages/*', (req,res) => {
  //
  // });



};
