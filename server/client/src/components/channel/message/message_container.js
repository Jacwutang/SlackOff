import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Message from './Message';
import { createMessage, fetchMessages, fetchUsers } from '../../../actions/index';



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
  // console.log("state.users", state.users);

  if(state.channels[ownProps.match.params.type_id] === undefined || state.users === undefined) return {};


  // we have users and channels now.

  let user_ids = state.channels[ownProps.match.params.type_id].members;

  const newObj = {};

  user_ids.map((user_id) => {
    newObj[user_id] = state.users[user_id]

  });

  return newObj;

};

function mapStateToProps(state,ownProps){
  // console.log("state", state);
  // console.log("type_id", ownProps.match.params.type_id);
  // console.log("channel", state.channels[ownProps.match.params.type_id]);





  return{
    type_id: ownProps.match.params.type_id,
    channel: state.channels[ownProps.match.params.type_id],
    messages: checkValidMessages(state),
    subscribers: formatSubscribers(state,ownProps),
  }

}


function mapDispatchToProps(dispatch){
  return{
    createMessage: (body, channel_id) => dispatch(createMessage(body,channel_id)),
    fetchMessages: (channel_id) => dispatch(fetchMessages(channel_id)),
    fetchUsers: () => dispatch(fetchUsers()),
  }


};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Message));
