import { RECEIVE_SESSION_ERRORS, RECEIVE_USER } from '../actions/types';



export default function(state = [], action){

  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return Object.values(action.payload);



    case RECEIVE_USER:
    return [];


    default:
      return state;
  }

}
