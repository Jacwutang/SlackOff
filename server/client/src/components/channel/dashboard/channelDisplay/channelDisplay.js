import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';

import { createChannel } from '../../../../actions/index';

import './channelDisplay.css';
import '../dashboard.css';
import '../animation.css';

class ChannelDisplay extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
  }
  componentWillReceiveProps(nextProps){
    if(this.props === nextProps)
      return;



  }



  handleSubmit(e){
    e.preventDefault();
    this.props.createChannel({
      name: 'Testing'
    });
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
      <div>
        <div className="message-display-add">
        <span> channelDisplay </span>
        <button onClick={() => this.onOpenModal() }> + </button>
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

        <h2>Create a new Channel</h2>
        <button onClick={(e) => this.handleSubmit(e)}> Submit </button>
        <input
          placeholder="Enter channel name"
        />

        </Modal>

        </div>
      <ul>

       {this.props.channel.map( (channel) =>
          <li
          key={channel._id}
          >
            {channel.name}

          </li>

      )}


      </ul>

      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDisplay);

function mapStateToProps(state){
  return {
    channel: state.channel
  };

}

function mapDispatchToProps(dispatch){
  return{
      createChannel: (channel) => dispatch(createChannel(channel))
  };

};


// {this.props.channel.map( (channel) =>
//     <li
//     key={channel._id}
//     >
//       {channel.name}
//
//     </li>
//
// )}
