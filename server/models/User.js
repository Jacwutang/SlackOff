const mongoose = require('mongoose');
const { Schema } = mongoose;
var bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({

  google:{
    googleId: String,
    displayName: String,
    image_url: String,
  },

  local:{
    username: {
     type: String
    },
    password: {
     type: String,
    }
  }


});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

mongoose.model('User', userSchema);
