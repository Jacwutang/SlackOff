import React, { Component } from 'react';
import {connect} from 'react-redux';

import './dashboard.css';



class DashBoard extends Component {

  dmdisplay(){
    return(
      <div>
      <div className="message-display-add">
        <span>DirectMessageDisplay</span>
        <button> + </button>

      </div>
      </div>
    );
  }
  channelDisplay(){
    return(
      <div>
      <div className="message-display-add">
      <span> channelDisplay </span>
      <button> + </button>

      </div>
      </div>
    );
  }

  render(){
    return(
      <section className="col s2">
        <div className="workspace-div"> Workspace </div>
        <section className="dashboard-message">

          {this.channelDisplay()}

          {this.dmdisplay()}



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
