import { RECEIVE_ALL_SEARCH_CHANNELS } from '../actions/types';


export default function(state = {}, action){

  Object.freeze(state);


  switch(action.type){
    case "RECEIVE_ALL_SEARCH_CHANNELS":
    const newObj = {};

     action.payload.map((channel) => {
        newObj[channel._id] =  channel;

    });

    return newObj;


    default:
      return state;
  }

};
