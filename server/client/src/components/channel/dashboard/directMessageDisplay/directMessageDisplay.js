import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import './directMessageDisplay.css';
import '../dashboard.css';
class DirectMessageDisplay extends Component {
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
        <span>DirectMessageDisplay</span>
         <button onClick={() =>  this.onOpenModal()}> +
        <Modal open={open} onClose={() => this.onCloseModal()} little>
          <h2>Create a Private Convo</h2>
        </Modal>

        </button>

      </div>
    )
  }
};

export default DirectMessageDisplay;
