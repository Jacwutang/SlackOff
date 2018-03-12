const mongoose = require('mongoose');
const { Schema } = mongoose;

// var options = { discriminatorKey: 'kind' };

const messageSchema = new Schema({
  body: String,
  author: {type: Schema.Types.ObjectId, ref: 'User' },
  timestamp: {type: Date, default: Date.now},
  channel: { type: Schema.Types.ObjectId, ref: 'Channel'}
  });

mongoose.model('Message', messageSchema);





// const channelMessageSchema = new Schema({
//   channel: { type: Schema.Types.ObjectId, ref: 'Channel'}
//   },
//   options );
//
// const channelMessage = Message.discriminator('channelMessage', channelMessageSchema);
//
//
// const directMessageSchema = new Schema({
//   directMessageChannel: { type: Schema.Types.ObjectId, ref: 'DirectMessageChannel'}
//   },
//   options);
//
// const directMessage = Message.discriminator('directMessage', directMessageSchema);
