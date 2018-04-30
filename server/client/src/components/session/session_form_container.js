import SessionForm from './session_form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {login,signup,receiveErrors} from '../../actions/index';
import {RECEIVE_SESSION_ERRORS} from '../../actions/types';


function mapStateToProps(state,ownProps){
  return{
    auth: state.auth,
    form_type: ownProps.match.params.form_type,
    errors: state.errors.session,
  }

}

function mapDispatchToProps(dispatch){
  return{
    login: (username,password) => dispatch(login(username,password)),
    signup: (username,password) => dispatch(signup(username,password)),
    clearErrors: () => dispatch({type: RECEIVE_SESSION_ERRORS, payload: []})

  }


}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
