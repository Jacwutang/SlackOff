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
      <h3> Search Users feature is not available </h3>



      </Modal>

      </div>
    );
  }


};

export default DirectMessageModal;

//
// <div className="modal-content">
//
//  <h3>Direct Messages</h3>
//
//  <div className="modal-form">
//     <input
//       placeholder="Find Users"
//       type="text"
//       required
//       value={this.state.input}
//       onChange={this.handleInput('input')}
//      />
//      <a onClick={(e) => this.handleSubmit(e)}>
//        <i className="fas fa-arrow-alt-circle-right"></i>
//      </a>
//
//  </div>
//
//   <DirectMessageSearch />
//
//   />
//
//
// </div>
