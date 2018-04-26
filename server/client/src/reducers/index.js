import { combineReducers } from 'redux';

import errorsReducer from './errorsReducer';
import authReducer from './authReducer';
import channelReducer from './channelReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  auth: authReducer,
  channels: channelReducer,
  messages: messageReducer,
  errors: errorsReducer
});
