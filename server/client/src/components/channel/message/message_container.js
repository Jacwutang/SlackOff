import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Message from './Message';




function mapStateToProps(state,ownProps){

  return{
    type_id: ownProps.match.params.type_id,
    channel: state.channels[ownProps.match.params.type_id],
  }

}


function mapDispatchToProps(dispatch){
  return{
    dispatch
  }


};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Message));
