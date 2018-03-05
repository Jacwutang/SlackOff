import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import './directMessageDisplay.css';
import '../dashboard.css';
import '../animation.css';

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
         <button onClick={() =>  this.onOpenModal()}> + </button>
        <Modal
        open={open}
        onClose={() => this.onCloseModal()}
        little
        classNames={{
              transitionEnter: 'transition-enter',
              transitionEnterActive: 'transition-enter-active',
              transitionExit: 'transition-exit-active',
              transitionExitActive: 'transition-exit-active',
            }}
        animationDuration={1000} >

        <h2>Create a Private Convo</h2>
        <button onClick={() => this.handleSubmit()}> Submit </button>
        <input
          placeHolder="Search Members"/>


        </Modal>



      </div>
    )
  }
};

export default DirectMessageDisplay;
