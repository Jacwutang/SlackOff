import React, { Component } from 'react';

import ChannelSearchListItem from './ChannelSearchListItem';



import 'assets/css/ChannelDisplay/channelDisplay.css';
import 'assets/css/Dashboard/dashboard.css';
import 'assets/css/SessionForm/sessionForm.css';
import 'assets/css/Message/message.css';
import 'assets/css/DirectMessageDisplay/directMessageDisplay.css';
import 'assets/css/Channel/channelSearch.css';

class ChannelSearch extends Component{
  constructor(props){
    super(props);
    this.state ={
      input: '',
      results: [],

    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllChannels().then(() => this.setState({results: this.props.channels}))
  }

  handleInput(e,field){
      const {channels} = this.props;

      this.setState( {[field]: e.target.value}, () => {
        this.setState({results: this.findMatches(this.state.input, channels)})

      });



      // this.setState({results: this.findMatches(this.state.input, channels)});

  }

  findMatches(word, channels){
    return channels.filter( (channel) => {
      const regex = new RegExp(word, 'gi');
      return channel.name.match(regex);

    })


  }

  handleClick(channel_id){
    this.props.history.push(`/messages/channel/${channel_id}`);
  }



  render(){


    return(
      <div className="search-results-wrapper">

      <div className="msg-input-wrapper search-container">
        <button type="button" className="msg-input-gif">
          <i className="fas fa-search"></i>
        </button>
        <input
        id="msg-input"
        placeholder="Search"
        value={this.state.input}
        onChange={(e) => this.handleInput(e,'input')}
       />

      </div>



       <ul className="ul-channels-search">
       {this.state.results.map( (channel) =>
         <ChannelSearchListItem
         key={channel._id}
         match={this.state.input}
         channel={channel}
         channels={this.props.myChannels}
         handleClick={this.handleClick}
         joinChannel={this.props.joinChannel}
         />
       )}
       </ul>



      </div>
    )
  }

};

export default ChannelSearch;
