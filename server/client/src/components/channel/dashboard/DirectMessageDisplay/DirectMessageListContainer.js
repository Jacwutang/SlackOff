import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import DirectMessageList from './DirectMessageList';


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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DirectMessageList));
