import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Message from './Message';
// import { createMessage, fetchMessages, fetchUsers } from '../../../actions/index';

import {createMessage, fetchMessages, fetchUsers, fetchSingleChannel} from 'actions/index';


function checkValidMessages(state){


  // return messages, and remove of the outer key for each message.
  if(Object.keys(state.messages).length > 0){

    let objSpread = Object.keys(state.messages).map((key) => {
        return state.messages[key];

    });

    return objSpread;


  } else{
    return [];
  }


};


function formatSubscribers(state,ownProps){
  // returns the subscribers to that channel

  if(state.channels[ownProps.match.params.type_id] === undefined || state.users === undefined) return {};


  // we have users and channels now.

  let user_ids = state.channels[ownProps.match.params.type_id].members;

  const newObj = {};

  user_ids.map((user_id) => {
    newObj[user_id] = state.users[user_id]

  });



  return newObj;

};

function formatSubscribersToArray(state,ownProps){
  if(state.channels[ownProps.match.params.type_id] === undefined || Object.keys(state.users).length === 0 ){
    return [];
  } else{
    
    let members = state.channels[ownProps.match.params.type_id].members;


    let array = members.map( (user) => state.users[user]);

    return array;
  }




}

function mapStateToProps(state,ownProps){


  return{
    type_id: ownProps.match.params.type_id,
    channel: state.channels[ownProps.match.params.type_id],

    messages: checkValidMessages(state),
    subscribers: formatSubscribers(state,ownProps),
    arraySubscribers: formatSubscribersToArray(state,ownProps),

  }

}


function mapDispatchToProps(dispatch){
  return{
    createMessage: (body, channel_id) => dispatch(createMessage(body,channel_id)),
    fetchMessages: (channel_id) => dispatch(fetchMessages(channel_id)),
    fetchMessage: (message) => dispatch({type: "RECEIVE_MESSAGE", payload: message }),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchSingleChannel: (channel_id) => dispatch(fetchSingleChannel(channel_id)),

  }


};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Message));
