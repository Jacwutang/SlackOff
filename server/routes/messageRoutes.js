const mongoose = require('mongoose');
const Message = mongoose.model('Message');
const Channel = mongoose.model('Channel');


module.exports = (app) => {

  app.post('/api/message/new', (req,res) => {

      const {body, channel_id } = req.body;
      // console.log(body, "BODY");
      // console.log(channel_id,"channel_id");
      // console.log(req.user, "USER IS");


      Channel.findOne({"_id": channel_id}, (err,channel) => {
        if(err){
          res.send(400,err.msg);
        }

        let newMessage = new Message({
          body: body,
          author: req.user._id,
          channel: channel._id
        });

        newMessage.save( (err,newMessage) => {
          if(err){
            console.log("error saving message", err);
            res.send(400, err.msg);
          } else{
            // console.log("message saved successfully", newMessage);



                let offset = new Date(newMessage.timestamp) - (newMessage.time_zone*60000);

                let local_time = new Date(offset);



            res.send(newMessage);
          }

        });



      });

    });


  app.get('/api/messages/channel_id', (req,res) => {
    // console.log("/api/messages/room_id route hit")


    // room_id 5adfbef8db2f763976c5bea
    const {channel_id} = req.query;
    // console.log(room_id, "ROOM ID IS");

    Message.find({channel: channel_id}, (err,docs) => {
      if(err){
        res.send(400, err.msg);

      } else{
        res.send(docs);
      }


    });



  });




}; //end of function
