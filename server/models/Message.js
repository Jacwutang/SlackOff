const mongoose = require('mongoose');
const { Schema } = mongoose;




var now = new Date();



const messageSchema = new Schema({
  body: {type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: 'User' },
  timestamp: {type: Date, default: now},
  time_zone: {type: Number, default: now.getTimezoneOffset()},
  channel: { type: Schema.Types.ObjectId, ref: 'Channel'}
  });


mongoose.model('Message', messageSchema);
