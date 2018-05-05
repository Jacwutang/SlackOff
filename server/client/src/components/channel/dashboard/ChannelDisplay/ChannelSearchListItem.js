import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import 'assets/css/Channel/channelSearch.css';



const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];




class ChannelSearchListItem extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount(){

  }

  handleClick(){
    const {channel, socket} = this.props;


    if(Object.keys(this.props.channels).length === 0 || !this.props.channels[channel._id]){

      this.props.joinChannel(channel._id).then( (action) => {

        socket.emit('joinChannel', action.payload);

        this.props.handleClick(channel._id);


      })


    } else{
      this.props.handleClick(channel._id);
    }
  }

  formatTime(){

    const {time_zone, timestamp} = this.props;

    let offset = new Date(timestamp) - (time_zone*60000);

    let local_time_str = new Date(offset).toISOString();

    let local_time = new Date(local_time_str.slice(0,-1));



    let hour;
    if(local_time.getHours() === 0){
      hour = 12;
    } else if(local_time.getHours() > 12 && local_time.getHours() <= 23){
      hour = local_time.getHours() - 12;
    } else{
      hour = local_time.getHours();
    }

    let minutes = (local_time.getMinutes() < 10)?
    `0${local_time.getMinutes()}` : local_time.getMinutes();





    let month = monthNames[local_time.getMonth()];
    let date = (local_time.getDate());
    let year = local_time.getFullYear();

    return (
      `${month} ${date}, ${year}`
    );




  }


  render(){


    const {channel, match} = this.props;



    const regex = new RegExp(match, 'gi');


    const channelName = channel.name.replace(regex, ` <span class="highlight-name"> ${match} </span>`);

      return(
        <div className="search-channel-details">
          <li className="li-search-results" onClick={this.handleClick} dangerouslySetInnerHTML={{__html:channelName}} />
          <span> Created on {this.formatTime()} </span>
        </div>
    )
  }

};

export default (ChannelSearchListItem);
