import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import DirectMessageDisplay from './DirectMessageDisplay';
// import { createMessage, fetchMessages, fetchUsers } from '../../../actions/index';

function mapStateToProps(state,ownProps){
  return {
    users: state.users,

  }


}

function mapDispatchToProps(dispatch){



}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DirectMessageDisplay));
