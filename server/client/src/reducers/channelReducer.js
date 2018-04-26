import { RECEIVE_CHANNEL, RECEIVE_CHANNELS } from '../actions/types';



export default function(state = {}, action){

  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CHANNEL:
      const newChannel =  { [action.payload._id]: action.payload};

      return Object.assign({},state, newChannel);

    case RECEIVE_CHANNELS:

      const newObj = {};
      action.payload.map((channel) => {
          newObj[channel._id] = channel
      });



      return Object.assign({},newObj);




    default:
      return state;
  }

}
