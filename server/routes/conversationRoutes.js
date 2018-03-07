const mongoose = require('mongoose');
const Conversation = mongoose.model('Conversation');

module.exports = (app) => {

  app.post('/api/conversation/new', (req,res) => {

      const { member, type } = req.body;
      //member would be user, type would be channel or dm


      let newConversation = new Conversation({member,type});

      newConversation.save( (err,newConversation) => {
        if(err){
          console.log("error", err);
          res.send(400, err.msg);
        } else{
          res.send(newConversation);
        }

      });



      // let newConversation = new Conversation({
      //   members: req.user._id,
      //   channel: newChannel._id
      // });

      // Create a new conversation as well






  });
