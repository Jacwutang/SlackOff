import React, { Component } from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import './dashboard.css';

import ChannelDisplay from './ChannelDisplay/ChannelDisplayContainer';
import DirectMessageDisplay from './DirectMessageDisplay/DirectMessageDisplayContainer';



class DashBoard extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log("DASHBOARD MOUNTED");
    console.log("DASHBOARD PROPS", this.props);
  }

  componentWillReceiveProps(){
    console.log("DASHBOARD RECIEVED PROPS");

  }

  render(){
    return(
      <section className="col s2">
        <div className="workspace-div">
        <span>
          Workspace
        </span>
        <a href= "/api/logout">
          <span> Logout </span>
        </a>

        </div>

        <section className="dashboard-message">

          <ChannelDisplay />
          <DirectMessageDisplay />






        </section>
      </section>
    );
  }


}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DashBoard));

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
