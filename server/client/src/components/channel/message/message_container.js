import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Message from './Message';


function checkValidMessages(state){
  if(Object.keys(state.messages).length > 0){

    let objSpread = Object.keys(state.messages).map((key,idx) => {
      // return {[key]: state.messages[key] }
      return state.messages[key];

    });

    return objSpread;


  } else{
    return [];
  }


};


function mapStateToProps(state,ownProps){
  // console.log("state", state);
  // console.log("type_id", ownProps.match.params.type_id);
  // console.log("channel", state.channels[ownProps.match.params.type_id]);
  return{
    type_id: ownProps.match.params.type_id,
    channel: state.channels[ownProps.match.params.type_id],
    messages: checkValidMessages(state),
  }

}


function mapDispatchToProps(dispatch){
  return{
    dispatch
  }


};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Message));
