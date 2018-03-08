const mongoose = require('mongoose');
const { Schema } = mongoose;

var options = { discriminatorKey: 'kind' };

const messageSchema = new Schema({
  body: String,
  author: {type: Schema.Types.ObjectId, ref: 'User' },
  timestamp: {type: Date, default: Date.now},

  // conversationId: {type: Schema.Types.ObjectId, ref:'Conversation' }
  },
  options);

const Message = mongoose.model('Message', messageSchema);





const channelMessageSchema = new Schema({
  channel: { type: Schema.Types.ObjectId, ref: 'Channel'}
  },
  options );

const channelMessage = Message.discriminator('channelMessage', channelMessageSchema);


const directMessageSchema = new Schema({
  directMessageChannel: { type: Schema.Types.ObjectId, ref: 'DirectMessageChannel'}
  },
  options);

const directMessage = Message.discriminator('directMessage', directMessageSchema);


// Conversation : {
//  id: 123,
//  members: [ user_id1, user_id2 ]
// }
// Message { conversationId: 123, author: user_2, body: 'Hi what's up' }
// Message { conversationId: 123, author: user_1, body: 'Whanna ask some question on stackoverflow' }
