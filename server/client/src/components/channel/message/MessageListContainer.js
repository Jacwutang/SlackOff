// import {connect} from 'react-redux';
// import {withRouter} from 'react-router';
// import MessageList from './MessageList';
// // import { createMessage, fetchMessages, fetchUsers } from '../../../actions/index';
//
// import {createMessage, fetchMessages, fetchUsers} from 'actions/index';
//
//
// function checkValidMessages(state){
//
//
//   // return messages, and remove of the outer key for each message.
//   if(Object.keys(state.messages).length > 0){
//
//     let objSpread = Object.keys(state.messages).map((key) => {
//         return state.messages[key];
//
//     });
//
//     return objSpread;
//
//
//   } else{
//     return [];
//   }
//
//
// };
//
//
// function formatSubscribers(state,ownProps){
//   // console.log("state.users", state.users);
//
//   if(state.channels[ownProps.match.params.type_id] === undefined || state.users === undefined) return {};
//
//
//   // we have users and channels now.
//
//   let user_ids = state.channels[ownProps.match.params.type_id].members;
//
//   const newObj = {};
//
//   user_ids.map((user_id) => {
//     newObj[user_id] = state.users[user_id]
//
//   });
//
//   return newObj;
//
// };
//
// function mapStateToProps(state,ownProps){
//
//
//   return{
//     type_id: ownProps.match.params.type_id,
//     channel: state.channels[ownProps.match.params.type_id],
//     messages: checkValidMessages(state),
//     subscribers: formatSubscribers(state,ownProps),
//   }
//
// }
//
//
// function mapDispatchToProps(dispatch){
//   return{
//     createMessage: (body, channel_id) => dispatch(createMessage(body,channel_id)),
//     fetchMessages: (channel_id) => dispatch(fetchMessages(channel_id)),
//     fetchMessage: (message) => dispatch({type: "RECEIVE_MESSAGE", payload: message }),
//     fetchUsers: () => dispatch(fetchUsers()),
//
//   }
//
//
// };
//
// export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MessageList));
