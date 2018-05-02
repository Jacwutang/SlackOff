import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Dashboard from './Dashboard';



function mapStateToProps(state){
  return (
    {


    }
  )
};


function mapDispatchToProps(dispatch){
  return(
    {
      dispatch
    }
  )

};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));
