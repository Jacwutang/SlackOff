import React, { Component } from "react";

import "assets/css/Channel/channel.css";
import DashBoard from "./dashboard/DashboardContainer";
import Message from "./message/message_container";

import socketIOClient from "socket.io-client";
const HOST = window.location.origin; // heroku
const socket = socketIOClient(HOST);

class Channel extends Component {
  constructor() {
    super();
  }

  render() {
    if (!this.props.auth) {
      return null;
    }

    return (
      <div className="row">
        <DashBoard socket={socket} />
        <Message socket={socket} />
      </div>
    );
  }
}

export default Channel;
