import SessionForm from './session_form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


function mapStateToProps(state,ownProps){
  return{
    auth: state.auth,
    form_type: ownProps.match.params.form_type
  }

}

function mapDispatchToProps(dispatch){
  return{

  }


}


export default connect(mapStateToProps, null)(SessionForm);