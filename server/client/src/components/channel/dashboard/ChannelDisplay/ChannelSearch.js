import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';



import './channelDisplay.css';
import '../dashboard.css';
import '../../../session/session.css';
import '../../message/message.css';
import '../DirectMessageDisplay/directMessageDisplay.css';


class ChannelSearch extends Component{
  constructor(props){
    super(props);

    this.state = {
      open: false,
      input: '',
      results: [],

    };


    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.toggleActive = this.toggleActive.bind(this);

  }

  onOpenModal(){

   this.setState({ open: true });
  };

  onCloseModal(){

   this.setState({ open: false });
  };

  handleInput(field){
    return( (e) => this.setState({[field]: e.target.value }));
  }

  renderSearchResults(){
    return(<ul className="search-ul"> Hi </ul>);
  }

  renderModalContent(){
   return(
     <div className="modal-content">

       <h5> Browse Channels </h5>
       <div className="msg-input-wrapper search-container">
         <button type="button" className="msg-input-gif">
           <i className="fas fa-search"></i>
         </button>
         <input
         id="msg-input"
         placeholder="Search"
         value={this.state.input}
         onChange={this.handleInput('input')}
        />
       </div>

       {this.renderSearchResults()}

     </div>

    );
  }


  render(){

    const{open} = this.state;

    return(
      <div>
      <a onClick={() => this.onOpenModal()}>
        <i className="fas fa-search search-channel" color="white"></i>
      </a>

      <Modal
        open={open}
        onClose={() => this.onCloseModal()}
        little >

        {this.renderModalContent()}

      </Modal>



      </div>
    );
  }
};

export default ChannelSearch;
