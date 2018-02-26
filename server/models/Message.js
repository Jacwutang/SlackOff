const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  body: String,
  author: {type: Schema.Types.ObjectId, ref: 'User' },
  timestamp: {type: Date, default: Date.now},
  conversationId: {type: Schema.Types.ObjectId, ref:'Conversation' }


});

mongoose.model('messages', messageSchema);
// Conversation : {
//  id: 123,
//  members: [ user_id1, user_id2 ]
// }
// Message { conversationId: 123, author: user_2, body: 'Hi what's up' }
// Message { conversationId: 123, author: user_1, body: 'Whanna ask some question on stackoverflow' }
