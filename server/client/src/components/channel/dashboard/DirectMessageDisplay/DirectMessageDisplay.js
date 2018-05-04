import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';

import DirectMessageModal from './DirectMessageModal';
import DirectMessageList from './DirectMessageList';


import 'assets/css/DirectMessageDisplay/directMessageDisplay.css';
import 'assets/css/Dashboard/dashboard.css';
import 'assets/css/animation.css';


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

    },2500);
  }

  render(){
    if(!this.state.loaded){

          return( <div className="spinner-wrapper-messages">
            <ThreeBounce size={25} color="white" />
            </div>
          );


    }

    const { open } = this.state;
    return(
      <div>

      <div className="message-display-add">
        <span className="message-type-header">Direct Messages</span>

        <DirectMessageModal />
      </div>

        <DirectMessageList />





      </div>
    );
  }
};

export default DirectMessageDisplay;
