import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import './dashboard.css';

import ChannelDisplay from './channelDisplay/channelDisplay';
import DirectMessageDisplay from './directMessageDisplay/directMessageDisplay';



class DashBoard extends Component {
  constructor(props){
    super(props);

    this.state = {
    open: false,
  };

    this.handleClick = this.handleClick.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    // this.handleChannelModal = this.handleChannelModal.bind(this);
    // this.handleDirectModal = this.handleDirectModal.bind(this);
  }

  handleClick(e){
    console.log(e);
  }


  onOpenModal(){
   this.setState({ open: true });
 };

 onCloseModal(){
   this.setState({ open: false });
 };


  directDisplay(){
    const { open } = this.state;

    return(
      <div>
      <div className="message-display-add">
        <span>DirectMessageDisplay</span>
         <button onClick={() =>  this.onOpenModal()}> +
        <Modal open={open} onClose={() => this.onCloseModal()} little>
          <h2>Create a Private Convo</h2>
        </Modal>

        </button>

      </div>
      </div>
    );
  }

  channelDisplay(){
    const { open } = this.state;

    return(
      <div>
      <div className="message-display-add">
      <span> channelDisplay </span>
      <button onClick={() => this.onOpenModal() }> +
      <Modal open={open} onClose={() => this.onCloseModal()} little>
        <h2>Create a new Channel</h2>
        <h3> more stuff </h3>
      </Modal>

      </button>

      </div>
      </div>
    );
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
