import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/types';


export default function(state = {}, action){

  Object.freeze(state);


  switch(action.type){


    case RECEIVE_ALL_USERS:

    const newObj = {};
      action.payload.map((user) => {
        newObj[user._id] = user
      });

    return newObj;

    case RECEIVE_USER:

    return Object.assign({}, state, { [action.payload._id]: action.payload});






    default:
      return state;

  }

};
