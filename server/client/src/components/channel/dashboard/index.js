import React, { Component } from 'react';
import {connect} from 'react-redux';

import './index.css';
import ChannelDisplay from './'


class DashBoard extends Component {
  render(){
    return(
      <section className="col s2">
        <div className="workspace-div"> Workspace </div>
        <section className="dashboard-message">
          <div> Channels

          </div>
          <div> Direct Messages </div>
        </section>
      </section>
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
