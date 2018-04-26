import {connect} from 'react-redux';
import Message from './Message';




function mapStateToProps(state,ownProps){


}


function mapDispatchToProps(dispatch){
  return{
    dispatch
  }


};

export default connect(mapStateToProps,mapDispatchToProps)(Message);
