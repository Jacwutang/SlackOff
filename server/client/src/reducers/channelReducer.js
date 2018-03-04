import { CREATE_CHANNEL } from '../actions/types';



export default function(state = [], action){

  Object.freeze(state);

  switch(action.type){
    case CREATE_CHANNEL:
      let newChannel =  action.payload.data;


      return state.concat(newChannel);
      break;


    default:
      return state;
  }

}
