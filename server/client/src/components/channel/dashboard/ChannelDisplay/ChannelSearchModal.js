import React, { Component } from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import axios from 'axios';


import ChannelSearch from './ChannelSearchContainer';

import 'assets/css/ChannelDisplay/channelDisplay.css';
import 'assets/css/Dashboard/dashboard.css';
import 'assets/css/SessionForm/sessionForm.css';
import 'assets/css/Message/message.css';
import 'assets/css/DirectMessageDisplay/directMessageDisplay.css';


class ChannelSearchModal extends Component{
  constructor(props){
    super(props);

    this.state = {
      open: false,
      input: '',
      results: [],

    };




  }

  componentWillReceiveProps(nextProps){
    if(!this.props.type_id !== nextProps.type_id){
      this.setState({open:false});
    }
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
          <div className="modal-content">

            <h5> Browse Channels </h5>
            <ChannelSearch />

          </div>

        </Modal>



      </div>
    );
  }
};




export default withRouter(connect(mapStateToProps,null)(ChannelSearchModal));

function mapStateToProps(state,ownProps){
  return{
    type_id: ownProps.match.params.type_id,
  }
}
