const mongoose = require('mongoose');
const { Schema } = mongoose;

const conversationSchema = new Schema({

  members: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  channel: { type: Schema.Types.ObjectId, ref: 'Channel'},
  directMessage: { type: Schema.Types.ObjectId, ref: 'DirectMessage'}
  //can be aprt of channels or direct_messages. Need to incorporate some meta-data to tell us if apart of channel or dm

});

mongoose.model('Conversation', conversationSchema);
// Conversation : {
//  id: 123,
//  members: [ user_id1, user_id2 ]
// }
// Message { conversationId: 123, author: user_2, body: 'Hi what's up' }
// Message { conversationId: 123, author: user_1, body: 'Whanna ask some question on stackoverflow' }
