import { CREATE_CHANNEL } from '../actions/types';



export default function(state = {}, action){

  Object.freeze(state);

  switch(action.type){
    case CREATE_CHANNEL:
      return Object.assign({},state,action.payload.data);
      break;


    default:
      return state;
  }

}
