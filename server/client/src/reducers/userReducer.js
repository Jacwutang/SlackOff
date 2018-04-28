import { RECEIVE_ALL_USERS } from '../actions/types';


export default function(state = [], action){

  Object.freeze(state);


  switch(action.type){
    case "RECEIVE_ALL_USERS":
      return [];


    default:
      return [];

  }

};
