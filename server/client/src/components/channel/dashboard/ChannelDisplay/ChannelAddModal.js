import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { RECEIVE_CHANNEL_ERRORS } from 'actions/types';


import 'assets/css/Dashboard/dashboard.css';
import 'assets/css/SessionForm/sessionForm.css';
import 'assets/css/Message/message.css';
import 'assets/css/DirectMessageDisplay/directMessageDisplay.css';


class ChannelAddModal extends Component{
  constructor(props){
    super(props);

    this.state = {
      open: false,
      input: '',

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);


  }

  onOpenModal(){
    this.setState({ open: true });
  };

  onCloseModal(){
   this.setState({ open: false });

  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.createChannel(this.state.input,this.props.type).then( (action) => {

      if(action.type !== RECEIVE_CHANNEL_ERRORS){
        this.setState({input: '', open: false});
        this.props.history.push(`/messages/channel/${action.payload._id}`);
      }


    });

  }

  handleInput(field){
    return( (e) => this.setState({[field]: e.target.value }));
  }



  renderModalContent(){

   return(

     <div className="modal-content">
     <ul className="errors-ul">
       {this.props.errors.map( (err,idx) => (
         <li className="errors-li" key={idx}>
           {err}
         </li>

       ))
       }

     </ul>

       <h5>Create a new Channel</h5>

       <form className="modal-form" onSubmit={this.handleSubmit}>
         <input
           placeholder="Enter channel name"
           type="text"
           required
           value={this.state.input}
           onChange={this.handleInput('input')}
           autoComplete="off"
          />
          <a onClick={this.handleSubmit}>
            <i className="fa fa-paper-plane fa-2x"></i>
          </a>

      </form>


     </div>

    );
  }


  render(){

    const{open} = this.state;

    return(
      <div>
        <a onClick={() => this.onOpenModal()}>
          <i className="fas fa-user-plus" color="white"></i>
        </a>

        <Modal
          open={open}
          onClose={() => this.onCloseModal()}
          little>

          {this.renderModalContent()}

        </Modal>



      </div>
    );
  }
};

export default ChannelAddModal;
