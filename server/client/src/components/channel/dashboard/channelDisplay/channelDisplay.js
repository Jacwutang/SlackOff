import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import './channelDisplay.css';
import '../dashboard.css';

class ChannelDisplay extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: false
    };
  }


  onOpenModal(){
   this.setState({ open: true });
 };

 onCloseModal(){
   this.setState({ open: false });
 };


  render(){
    const { open } = this.state;
    return(

      <div className="message-display-add">
      <span> channelDisplay </span>
      <button onClick={() => this.onOpenModal() }> +
      <Modal open={open} onClose={() => this.onCloseModal()} little>
        <h2>Create a new Channel</h2>
        
      </Modal>

      </button>

      </div>

    )
  }
};

export default ChannelDisplay;
