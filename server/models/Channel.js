const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');


var now = new Date();

const channelSchema = new Schema({
  name: {type: String, trim: true, unique: true, required: [true, "Input cannot be blank"],uniqueCaseInsensitive: true},
  members: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  is_dm: {type: Boolean, default: false},
  timestamp: {type: Date, default: now},
  time_zone: {type: Number, default: now.getTimezoneOffset()}



});

channelSchema.plugin(uniqueValidator);

mongoose.model('Channel', channelSchema);
