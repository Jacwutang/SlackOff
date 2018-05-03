import { combineReducers } from 'redux';

import errorsReducer from './errorsReducer';
import authReducer from './authReducer';
import channelReducer from './channelReducer';
import messageReducer from './messageReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  auth: authReducer,
  channels: channelReducer,
  messages: messageReducer,
  search: searchReducer,
  users: userReducer,
  errors: errorsReducer
});
