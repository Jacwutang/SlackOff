const mongoose = require('mongoose');
const { Schema } = mongoose;

const channelSchema = new Schema({
  name: String



});

mongoose.model('channels', channelSchema);
// Conversation : {
//  id: 123,
//  members: [ user_id1, user_id2 ]
// }
// Message { conversationId: 123, author: user_2, body: 'Hi what's up' }
// Message { conversationId: 123, author: user_1, body: 'Whanna ask some question on stackoverflow' }
