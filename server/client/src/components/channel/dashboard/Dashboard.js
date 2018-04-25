import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import './dashboard.css';

import ChannelDisplay from './channelDisplay/channel_display_container';
import DirectMessageDisplay from './directMessageDisplay/directMessageDisplay';



class DashBoard extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <section className="col s2">
        <div className="workspace-div"> Workspace </div>
        <section className="dashboard-message">

          <ChannelDisplay />
          <DirectMessageDisplay />






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
