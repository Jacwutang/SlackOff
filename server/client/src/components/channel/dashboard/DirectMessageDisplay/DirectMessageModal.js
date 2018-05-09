import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import DirectMessageSearch from './DirectMessageSearch';


import 'assets/css/DirectMessageDisplay/directMessageDisplay.css';
import 'assets/css/Dashboard/dashboard.css';
import 'assets/css/animation.css';

class DirectMessageModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  componentDidMount(){
    //fetch direct messages
  }

   onOpenModal(){
    this.setState({ open: true });
  };

  onCloseModal(){
    this.setState({ open: false });
  };

  handleInput(field){
    return ((e) => {
      this.setState({[field]: e.target.value})
    })
  }

  render(){


    return(
      <div>
      <a onClick={() => this.onOpenModal()}>
        <i className="fa fa-users fa-2x"></i>
      </a>

      <Modal
      open={this.state.open}
      onClose={() => this.onCloseModal()}
      little
      animationDuration={500} >
      <h4> Direct Messaging is not available </h4>

      </Modal>

      </div>
    );
  }


};

export default DirectMessageModal;
