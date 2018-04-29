const mongoose = require('mongoose');
const Channel = mongoose.model('Channel');
const User = mongoose.model('User');


module.exports = (app) => {


  //create a channel
  app.post('/api/channel/new', (req,res) => {

      const { name,type } = req.body;


      //create channel with 1 user

      let newChannel = {
        name: name,
        members: [req.user],
        is_dm: type


      }

      Channel.create(newChannel, (err,channel) => {
        if(err){
          console.log("create channel failed");
          res.status(400).send({message: "Error creating channel"});
        } else{
          // console.log("create channel succeded");
          // console.log(channel);

          User.update({"_id": req.user.id},
          {$push: {channels: channel._id}}, (err,success) => {
            if(err){
              console.log("error update user");
            } else{

            }

          });



          res.send(channel);
        }

      });




  });

  //fetch your channels
  app.get('/api/channels', (req,res) => {
    // dot versus [].

    const {user} = req;
    // const {type} = req.query;
    // console.log("api/channels ROUTE HIT");


    User
    .findOne({"_id": user.id})
    .populate('channels')
    .exec(function(err,docs){
      if(err){
        res.status(401).send({message: "Error occured finding user's channels"});
      }

      res.send(docs.channels);
    });






});










};


// name: {type: String, unique: true, required: true},
// members: [{ type: Schema.Types.ObjectId, ref: 'User'}],
// is_dm: {type: Boolean, default: false}
