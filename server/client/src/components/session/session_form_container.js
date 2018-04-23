import SessionForm from './session_form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {login,signup} from '../../actions/index';


function mapStateToProps(state,ownProps){
  return{
    auth: state.auth,
    form_type: ownProps.match.params.form_type
  }

}

function mapDispatchToProps(dispatch){
  return{
    login: (username,password) => dispatch(login(username,password)),
    signup: (username,password) => dispatch(signup(username,password))
  }


}


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
