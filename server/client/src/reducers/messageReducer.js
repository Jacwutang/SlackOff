import { RECEIVE_MESSAGE, RECEIVE_ALL_MESSAGES } from '../actions/types';


export default function(state = {}, action){

  Object.freeze(state);


  switch(action.type){
    case "RECEIVE_MESSAGE":
      return Object.assign({}, {[action.payload._id]: action.payload });



    case "RECEIVE_ALL_MESSAGES":
      let newObj = {};

      newObj = action.payload.map((message) => {
          newObj[message._id] =  message;

      });

      return Object.assign({},newObj);



    default:
      return state;
  }

};
