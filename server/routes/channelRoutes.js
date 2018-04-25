const mongoose = require('mongoose');
const Channel = mongoose.model('Channel');


module.exports = (app) => {


  //create a channel
  app.post('/api/channel/new', (req,res) => {

      const { name } = req.body;


      //create channel with 1 user
      let newChannel = new Channel({name});

      newChannel.save( (err,newChannel) => {
        if(err){
          console.log("error", err);
          res.send(400, err.msg);
        } else{
          res.send(newChannel);
        }

      });




  });

  //fetch your channels
  app.get('/api/channels', (req,res) => {
    //figure out the type of user. Google or local.
    const {type} = req.query;
    const {user} = req.user;









  });






};
