const mongoose = require('mongoose');
const { Schema } = mongoose;

const directMessageChannelSchema = new Schema({
    members: [{ type: Schema.Types.ObjectId, ref: 'User'}]
    },
    options);

// mongoose.model('DirectMessageChannel', directMessageChannelSchema);
// Conversation : {
//  id: 123,
//  members: [ user_id1, user_id2 ]
// }
// Message { conversationId: 123, author: user_2, body: 'Hi what's up' }
// Message { conversationId: 123, author: user_1, body: 'Whanna ask some question on stackoverflow' }
