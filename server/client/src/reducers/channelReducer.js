import { RECEIVE_CHANNEL, RECEIVE_ALL_CHANNELS } from '../actions/types';




export default function(state = {}, action){

  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CHANNEL:
      if(Array.isArray(action.payload))
        return state;

      const newChannel =  { [action.payload._id]: action.payload};

      return Object.assign({},state, newChannel);

    case RECEIVE_ALL_CHANNELS:

      const newObj = {};
      action.payload.map((channel) => {
          newObj[channel._id] = channel
      });

      return newObj;




    default:
      return state;
  }

}
