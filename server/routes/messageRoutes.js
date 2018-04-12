const mongoose = require('mongoose');
const Message = mongoose.model('Message');


module.exports = (app) => {

  app.post('/api/message/new', (req,res) => {

      const {body, channel } = req.body;



      let newMessage = new Message({
        body: req.body,
        author: req.user;
        channel: channel
      });

      newMessage.save( (err,newMessage) => {
        if(err){
          console.log("error", err);
          res.send(400, err.msg);
        } else{
          res.send(newMessage);
        }

      });

    }   
}
