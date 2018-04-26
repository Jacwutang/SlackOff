import axios from 'axios';
import { RECEIVE_USER, CREATE_CHANNEL,RECEIVE_SESSION_ERRORS, RECEIVE_CHANNELS, RECEIVE_CHANNELS_ERRORS } from './types';

// axios pings back-end with a http request.
// res is what the back-end returns
// dispatch a regular pojo contained within res

export const fetchChannels = () => async dispatch => {


  try{
    const res = await axios.get('/api/channels');
    return dispatch({type: RECEIVE_CHANNELS, payload: res.response.data});

  }catch(error){
    return dispatch({type:RECEIVE_CHANNELS_ERRORS,payload:error.response.data});
  }


};

export const fetchUser = () => async dispatch => {
      const res = await axios.get('/api/current_user');

      return dispatch({type: RECEIVE_USER, payload: res.response.data});
};



export const createChannel = (channel) => async dispatch => {

      const res =  await axios.post(
      '/api/channel/new',
      channel
      );

      return dispatch({type: CREATE_CHANNEL, payload: res.response.data});
};

export const login = (username,password) => async dispatch => {

  try {

      // wait for the fetch to finish then dispatch the result
      const res = await axios.post('/api/local-login', {username:username,password:password});



      return dispatch({type: RECEIVE_USER, payload: res.response.data});

    } catch (error) {

      // catch errors from fetch
      dispatch({type:RECEIVE_SESSION_ERRORS, payload:error.response.data});
    }




};

export const signup = (username,password) => async dispatch => {
  try{


    const res = await axios.post('/api/local-signup', {username:username,password:password});

    return dispatch({type: RECEIVE_USER, payload: res.response.data});

  }catch(error){

      dispatch({type: RECEIVE_SESSION_ERRORS, payload: error.response.data});

  }


};
