import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Channel from './Channel';


function mapStateToProps(state,ownProps){


  return (
    {
      type_id: ownProps.match.params.type_id,
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
