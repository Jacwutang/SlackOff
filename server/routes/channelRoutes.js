const mongoose = require('mongoose');


module.exports = (app) => {

  app.get('/messages/channel/new', (req,res) => {
      

      // console.log("HERE");
      // console.log(req);
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
