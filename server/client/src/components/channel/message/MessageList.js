import React, { Component } from 'react';
import {connect} from 'react-redux';


import 'assets/css/Message/message.css';
import MessageListItem from './MessageListItem';
import MessageInput from './MessageInput';
import MessagePanelInfo from './MessagePanelInfo';
import axios from 'axios';
import isEqual  from 'lodash/isEqual';
// import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../../../actions/types';
import {RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE} from 'actions/types';


import {FoldingCube} from 'better-react-spinkit';

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


class MessageList extends Component{
  constructor(props){
    super(props);

    this.state = {
      loaded: false,

    }

  }

  componentWillReceiveProps(nextProps){

  }

  componentDidMount(){
    this.scrollToBottom();

  }
  componentWillUpdate() {
    let list = this.refs.list;

    this.shouldScroll =
      list.scrollTop + list.offsetHeight === list.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScroll) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    let list = this.refs.list;
    list.scrollTop = list.scrollHeight;
  }

  formatTime(timestamp,time_zone){


    let offset = new Date(timestamp) - (time_zone*60000);

    let local_time_str = new Date(offset).toISOString();

    let local_time = new Date(local_time_str.slice(0,-1));



    let hour;
    if(local_time.getHours() < 12){
      hour = `${local_time.getHours()- 12}`;
    } else if(local_time.getHours() > 12 && local_time.getHours() <= 23){
      hour = local_time.getHours() - 12;
    } else{
      hour = 12;
    }

    let minutes = (local_time.getMinutes() < 10)?
    `0${local_time.getMinutes()}` : local_time.getMinutes();




    let day = dayNames[local_time.getDay()];
    let month = monthNames[local_time.getMonth()];
    let period = (local_time.getHours() <= 11)? "AM" : "PM";
    let date = (local_time.getDate());

    return(
      [hour,minutes,period,day,month,date]
    );

  }




  render(){
      const {subscribers,messages} = this.props;

      let hour,minutes,period,day,month,date;
      let bool;
      return(

          <ul className="ul-messages" ref="list">
            {
              this.props.messages.map( (message, idx) => {

            [hour,minutes,period,day,month,date] = this.formatTime(message.timestamp, message.time_zone);

            if(idx === 0){
              bool = true;
            }


              return (
                <MessageListItem
                key={message._id}
                author={subscribers[message.author].username}
                body={message.body}
                hour={hour}
                minutes={minutes}
                period={period}
                day={day}
                month={month}
                date={date}
                renderDivideLine={bool}

                /> );
            })

            }
          </ul>

       );


  }

}

export default MessageList;
