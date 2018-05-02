import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import DirectMessageList from './DirectMessageList';
// import { createMessage, fetchMessages, fetchUsers } from '../../../actions/index';

function mapStateToProps(state,ownProps){
  //fiter the channels

  return {
    channels: state.channels,

  }


}

function mapDispatchToProps(dispatch){
  return {
    dispatch
  }


}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DirectMessageList));
