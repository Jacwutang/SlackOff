import { CREATE_CHANNEL } from '../actions/types';



export default function(state = [], action){

  Object.freeze(state);

  switch(action.type){
    case CREATE_CHANNEL:
      let newChannel =  Object.assign({},state,action.payload.data);

      return [newChannel];
      break;


    default:
      return state;
  }

}
