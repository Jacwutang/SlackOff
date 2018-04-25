const mongoose = require('mongoose');
const Channel = mongoose.model('Channel');
const User = mongoose.model('User');


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
    // dot versus [].

    const {user} = req;
    // const {type} = req.query;
    console.log("Channel ROUTE HIT");


    User
    .findOne({"_id": user.id})
    .populate('channels')
    .exec(function(err,docs){
      if(err){
        res.status(401).send({message: "Error occured finding user's channels"});
      }
      // console.log("DOCS",docs.channels);
      res.send(docs.channels);
    });






});










};
