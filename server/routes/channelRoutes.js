const mongoose = require('mongoose');


module.exports = (app) => {

  app.post('/api/channel/new', (req,res) => {

      const { name } = req.body;

      const Channel = mongoose.model('Channel');

      let newChannel = new Channel({name});

      newChannel.save( (err,newChannel) => {
        if(err){
          console.log("error", err);
          res.send(400, err.msg);
        } else{
          res.send(newChannel);
        }

      });





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
