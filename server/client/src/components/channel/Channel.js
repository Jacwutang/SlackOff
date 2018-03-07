import React, { Component } from 'react';
import {connect} from 'react-redux';


import './channel.css';
import DashBoard from './dashboard/Dashboard';
import Message from './message/Message';
import { withRouter } from 'react-router';


class Channel extends Component {
  constructor(){
    super();

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

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(Channel));



function mapStateToProps(state,ownProps){
  //ownProps.match.params.type
  //ownProps.match.params.type_id

  console.log(ownProps, "HERE");

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
