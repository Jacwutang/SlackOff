import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import ChannelIndexItem from './ChannelIndexItem';


import 'assets/css/ChannelDisplay/channelDisplay.css';
import 'assets/css/Dashboard/dashboard.css';
import 'assets/css/animation.css';


import {Wave} from 'better-react-spinkit';

class ChannelList extends Component{
  constructor(props){
    super(props);



    this.state = {
          currentChannel: '',
          loaded: false
    };


    this.toggleActive = this.toggleActive.bind(this);

  }

  componentDidMount(){

      this.props.fetchChannels().then( (action) => {

      if(action.payload.length !== 0){
        this.props.history.push(`/messages/channel/${action.payload[0]._id}`);
      }

      setTimeout( () => {
        this.setState({loaded:true})

      },2500);

    });

  }

  componentWillReceiveProps(nextProps){

    if(nextProps.channels.length !== this.props.channels.length){

          //  For active channel highlighting, 2 cases to test for. Initial fetch and subsequent adds
           let currentChannel = (this.props.channels.length === 0)?
           nextProps.channels[0]:
           nextProps.channels.slice(-1)[0];

           setTimeout( () => {
              this.setState({currentChannel: currentChannel})
            },500);

    } else if(nextProps.type_id !== this.props.type_id){
      this.setState({currentChannel: nextProps.channelsObj[nextProps.type_id]});

    } else{

      this.setState({currentChannel: nextProps.channelsObj[nextProps.type_id]});
    }


  }






  toggleActive(channel){

      this.setState({
        currentChannel: channel
      });

  }

  render(){

    if(!this.state.loaded){
        return (
        <div className="spinner-wrapper-channels">
          <Wave size={35} color="black" />
        </div>
        );
      }



      return(
        <ul className="ul-channel-messages">

         {this.props.channels.map( (channel) => {

           let bool = (channel === this.state.currentChannel)? true: false;

           return(
              <ChannelIndexItem
              key={channel._id}
              channel={channel}
              active={bool}
              onToggle={this.toggleActive}
              />
           )
         })}


        </ul>
     );
    }


}

export default ChannelList;
