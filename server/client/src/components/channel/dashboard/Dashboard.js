import React, { Component } from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import 'assets/css/Dashboard/dashboard.css';

import ChannelDisplay from './ChannelDisplay/ChannelDisplay';
import DirectMessageDisplay from './DirectMessageDisplay/DirectMessageDisplay';



class Dashboard extends Component {
  constructor(props){
    super(props);

  }

  render(){

    let username = this.props.auth.local? this.props.auth.local.username: this.props.auth.google.displayName;

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

        <div className="displayname-div">
          <i className="fas fa-circle"></i>
          <h4 class> {username} </h4>
        </div>

        <section className="dashboard-message">

          <ChannelDisplay socket={this.props.socket}/>
          <DirectMessageDisplay />






        </section>
      </section>
    );
  }


}

export default Dashboard;
