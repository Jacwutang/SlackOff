import sessionErrorsReducer from './errors/sessionErrorsReducer';
import channelErrorsReducer from './errors/channelErrorsReducer';

import {combineReducers} from 'redux';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  channel: channelErrorsReducer,
});

export default errorsReducer;
