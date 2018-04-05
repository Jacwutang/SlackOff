import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Radium from 'radium';
// import './channelDisplay.css';
import '../dashboard.css';
import {withRouter} from 'react-router';


class ChannelIndexItem extends Component{
  constructor(props){
    super(props);



    this.state = ({

    })



  }

  componentDidMount(){
      //ajax call to fetch messages
      // use this.props.channel._id as the id to fetch messages
      

  }



  componentWillReceiveProps(nextProps){

  }

  handleClick = () => {
    //this is preserved/unchanged. Otherwise it would be from the event handler
    this.props.onToggle(this.props.channel);
  }



  render(){

    const { channel } = this.props;

    return(
      <Link to={`/messages/channel/${channel._id}`}>

      <li
      style={this.props.active === true ? styles.activeStyle : null }
      onClick={this.handleClick}>

        {channel.name}

      </li>

      </Link>
    );
  }

};

let styles = {
  activeStyle:{
    backgroundColor: 'blue'
  },


}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ChannelIndexItem));

function mapStateToProps(state,ownProps){
    return {};


}

function mapDispatchToProps(dispatch){
  return {};
}
