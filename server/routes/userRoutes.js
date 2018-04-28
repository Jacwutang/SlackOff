const mongoose = require('mongoose');
const User = mongoose.model('User');

const isEqualWith = require('lodash/isEqualWith');


module.exports = (app) => {

  app.get('/api/users/', (req,res) => {

    User
    .find({})
    .exec(function(err,docs){
      if(err){
        res.status(401).send({message: "error fetching all users"});
      }


      let formatted_users_array = docs.map( (user) => {

        if(user.google.displayName){

          return ( {username: user.google.displayName, _id: user._id} );
        } else if(user.local.username){


          return ( {username: user.local.username, _id: user._id} );
        }

      });


      res.send(formatted_users_array);



    });



  });






};
