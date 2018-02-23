import React, { Component } from 'react';
import {connect} from 'react-redux';


import './Channel.css';
import DashBoard from './dashboard/Dashboard';
import Message from './message/Message';


class Channel extends Component {
  render(){
    return(

    <div className="row">

      <DashBoard />
      <Message />


    </div>


    );
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Channel);



function mapStateToProps(state){
  return (
    {

    }
  )
};


function mapDispatchToProps(dispatch){
  return(
    {

    }
  )

};
