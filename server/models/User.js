const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  conversationId: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }]

});

mongoose.model('User', userSchema);
