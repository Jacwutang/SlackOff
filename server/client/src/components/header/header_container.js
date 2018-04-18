import {connect} from 'react-redux';
import Header from './Header';


function mapStateToProps(state){
  return {
    auth: state.auth
  }

};


export default connect(mapStateToProps)(Header);
