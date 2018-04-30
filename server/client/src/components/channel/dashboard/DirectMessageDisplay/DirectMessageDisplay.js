import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import DirectMessageSearch from './DirectMessageSearch';


import './directMessageDisplay.css';
import '../dashboard.css';
import '../animation.css';


import {ThreeBounce} from 'better-react-spinkit';

class DirectMessageDisplay extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: false,
      input: '',
      loaded: false,
    };


  }

  componentDidMount(){

    window.setTimeout( () => {
      this.setState({loaded:true})

    },5000);
  }

  onOpenModal(){
   this.setState({ open: true });
 };

 onCloseModal(){
   this.setState({ open: false });
 };

 handleInput(field){

   return( (e) =>
      this.setState({[field]: e.target.value})
   );
 }

 handleSubmit(e){
   e.preventDefault();

 }




  render(){
    if(!this.state.loaded){

          return( <div className="spinner-wrapper-messages">
            <ThreeBounce size={35} color="white" />
            </div>
          );


    }

    const { open } = this.state;
    return(
      <div className="message-display-add">
        <span className="message-type-header">Direct Messages</span>
        <a onClick={() => this.onOpenModal()}>
          <i className="fa fa-users fa-2x"></i>
        </a>

        <Modal
        open={open}
        onClose={() => this.onCloseModal()}
        little
        animationDuration={500} >

          <div className="modal-content">

           <h3>Direct Messages</h3>

           <div className="modal-form">
              <input
                placeholder="Find Users"
                type="text"
                required
                value={this.state.input}
                onChange={this.handleInput('input')}
               />
               <a onClick={(e) => this.handleSubmit(e)}>
                 <i className="fas fa-arrow-alt-circle-right"></i>
               </a>

           </div>

            <DirectMessageSearch
            input={this.state.input}
            users={this.props.users}

            />


          </div>



        </Modal>



      </div>
    )
  }
};

export default DirectMessageDisplay;
