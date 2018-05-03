const mongoose = require('mongoose');
const Channel = mongoose.model('Channel');
const User = mongoose.model('User');


module.exports = (app) => {


  //create a channel
  app.post('/api/channel/new', (req,res) => {

      const { name,type } = req.body;
      // console.log("channel route hit");
      // console.log(name,"name");
      // console.log(type,"type");
      // console.log(req.user);

      //create channel with 1 user

      let newChannel = {
        name: name,
        members: [req.user],
        is_dm: false

      }

      Channel.create(newChannel, (err,channel) => {
        if(err){
          console.log("ERROR IS", err);
          res.status(400).send(
          { message: err.errors.name.message });

        } else{
          console.log("create channel succeded");
          console.log(channel);

          User.update({"_id": req.user.id},
          {$push: {channels: channel._id}}, (err,success) => {
            if(err){
              console.log("error update user");
            }

          });



          res.send(channel);
        }

      });




  }); //create channel



  app.get('/api/channels/user', (req,res) => {


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






}); // get user's Channels





  app.get('/api/channels', (req,res) => {

    Channel.find({}, (err,docs) => {
      if(docs){
        // let newObj = {};
        // docs.map( (doc) => {
        //    return newObj[doc._id] = { name: doc.name, _id: doc._id};
        //
        // });
        //
        //
        // res.send(newObj);
        res.send(docs);
      }

    });


  }); // grab all channels


  app.post('/api/channel/join', (req,res) => {
    const {user} = req;
    const {channel_id} = req.body;

    console.log("/api/channel/join route hit");
    console.log(channel_id);


    Channel.findOne({"_id": channel_id}, (err,channel) => {
      if(channel){
        channel.members.push(user);

        User.update({"_id": user.id}, {$push: {channels: channel._id}});

        res.send(channel);
      }




    });


  });








};


// name: {type: String, unique: true, required: true},
// members: [{ type: Schema.Types.ObjectId, ref: 'User'}],
// is_dm: {type: Boolean, default: false}
