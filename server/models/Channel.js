const mongoose = require('mongoose');
const { Schema } = mongoose;


var now = new Date();

const channelSchema = new Schema({
  name: {type: String, unique: true, required: true},
  members: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  is_dm: {type: Boolean, default: false},
  timestamp: {type: Date, default: now},
  time_zone: {type: Number, default: now.getTimezoneOffset()}



});

mongoose.model('Channel', channelSchema);
