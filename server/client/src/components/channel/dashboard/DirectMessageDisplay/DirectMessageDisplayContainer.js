import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import DirectMessageDisplay from './DirectMessageDisplay';
// import { createMessage, fetchMessages, fetchUsers } from '../../../actions/index';

function mapStateToProps(state,ownProps){
  return {
    channels: state.channels,

  }


}

function mapDispatchToProps(dispatch){
  return {
    dispatch
  }


}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DirectMessageDisplay));
