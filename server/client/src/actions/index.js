import axios from 'axios';
import { RECEIVE_USER, CREATE_CHANNEL } from './types';

// axios pings back-end with a http request.
// res is what the back-end returns
// dispatch a regular pojo contained within res

export const fetchUser = () => async dispatch => {
      const res = await axios.get('/api/current_user');

      return dispatch({type: RECEIVE_USER, payload: res});
};



export const createChannel = (channel) => async dispatch => {



      const res =  await axios.post(
      '/api/channel/new',
      channel
      );

      return dispatch({type: CREATE_CHANNEL, payload: res});
};

export const login = (username,password) => async dispatch => {
  const res = await axios.post('/api/local-login', {username:username,password:password});

  console.log(res, "RES OVER HERE IS");

  return dispatch({type: RECEIVE_USER, payload: res});


};

export const signup = (username,password) => async dispatch => {
  const res = await axios.post('/api/local-signup', {username:username,password:password});

  return dispatch({type: RECEIVE_USER, payload: res});


};
