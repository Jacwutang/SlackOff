import { combineReducers } from 'redux';

import errorsReducer from './errorsReducer';
import authReducer from './authReducer';
import channelReducer from './channelReducer';

export default combineReducers({
  auth: authReducer,
  channels: channelReducer,
  errors: errorsReducer
});
