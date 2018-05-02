import React, { Component } from 'react';



import 'assets/css/Channel/channel.css';
import DashBoard from './dashboard/DashboardContainer';
import Message from './message/message_container';


class Channel extends Component {
  constructor(){
    super();

  }

  componentDidMount(){


  }







  render(){


    return(

    <div className="row">

      <DashBoard />
      <Message />



    </div>


    );
  }
};

export default Channel;
