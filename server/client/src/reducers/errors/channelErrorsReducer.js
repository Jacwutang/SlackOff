import { RECEIVE_CHANNEL_ERRORS, RECEIVE_CHANNEL } from '../../actions/types';



export default function(state = [], action){

  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CHANNEL_ERRORS:
      // {message : {"channel not found"}}
      return Object.values(action.payload);



    case RECEIVE_CHANNEL:
    return [];


    default:
      return state;
  }

}
