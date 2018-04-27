import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Channel from './Channel';


function mapStateToProps(state,ownProps){


  return (
    {
      auth: state.auth,
    }
  )
};


function mapDispatchToProps(dispatch){
  return(
    {

    }
  )

};

export default connect(mapStateToProps,mapDispatchToProps)(Channel);
