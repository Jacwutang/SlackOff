import { combineReducers } from 'redux';

import errorsReducer from './errorsReducer';
import authReducer from './authReducer';
import channelReducer from './channelReducer';
import messageReducer from './messageReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  channels: channelReducer,
  messages: messageReducer,
  users: userReducer,
  errors: errorsReducer
});
