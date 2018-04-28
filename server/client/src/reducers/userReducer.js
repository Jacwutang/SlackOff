import { RECEIVE_ALL_USERS } from '../actions/types';


export default function(state = [], action){

  Object.freeze(state);


  switch(action.type){
    case RECEIVE_ALL_USERS:
      // let newObj = {};
      //
      // action.payload.map( (user) => {
      //   return newObj[user._id] = user;
      // });

      const newObj = {};
      action.payload.map((user) => {
          newObj[user._id] = user
      });

      return newObj;





    default:
      return [];

  }

};
