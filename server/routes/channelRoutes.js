const mongoose = require('mongoose');
const Channel = mongoose.model('Channel');
const Conversation = mongoose.model('Conversation');

module.exports = (app) => {

  app.post('/api/channel/new', (req,res) => {

      const { name } = req.body;



      let newChannel = new Channel({name});

      newChannel.save( (err,newChannel) => {
        if(err){
          console.log("error", err);
          res.send(400, err.msg);
        } else{

          let newConversation = new Conversation({
            members: req.user._id,
            channel: newChannel._id
          });



          res.send({
            channel: newChannel,
            conversation: newConversation
          });
        }

      });



      // let newConversation = new Conversation({
      //   members: req.user._id,
      //   channel: newChannel._id
      // });

      // Create a new conversation as well






      // const Channel = mongoose.model('Channel');
      // const test = new Channel({name: "Hello"});
      // test.save();
      // console.log(test);
  });




  // app.get('/messages/*', (req,res) => {
  //
  // });



};

// convo schema
// members: [{ type: Schema.Types.ObjectId, ref: 'User'}],
// channel: { type: Schema.Types.ObjectId, ref: 'Channel'},
// directMessage: { type: Schema.Types.ObjectId, ref: 'DirectMessage'}
