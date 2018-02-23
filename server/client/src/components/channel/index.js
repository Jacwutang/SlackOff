import React, { Component } from 'react';
import {connect} from 'react-redux';


import './index.css';
import DashBoard from './dashboard/index';
import Message from './message/index';


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
