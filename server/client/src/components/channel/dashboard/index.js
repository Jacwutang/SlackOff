import React, { Component } from 'react';
import {connect} from 'react-redux';

import './index.css';

class DashBoard extends Component {
  render(){
    return(
      <div className="col s2">
        Side column
      </div>
    );
  }


}

export default connect(mapStateToProps,mapDispatchToProps)(DashBoard);

function mapStateToProps(state){
  return (
    {

    }
  )
};


function mapDispatchToProps(dispatch){
  return(
    {

    }
  )

};
