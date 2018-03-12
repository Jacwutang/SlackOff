const mongoose = require('mongoose');
const { Schema } = mongoose;

const channelSchema = new Schema({
  name: {type: String, unique: true, required: true},
  members: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  is_dm: {type: Boolean, default: false}



});

mongoose.model('Channel', channelSchema);
