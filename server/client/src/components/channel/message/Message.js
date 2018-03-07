import React, { Component } from 'react';
import {connect} from 'react-redux';

import './message.css';

class Message extends Component {

  constructor(){
    super();
    this.state = {
      input: ""
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

  }


  renderConversations(){
    return(
      "hi"
    )

  }




  handleInput(field){


    return(
      (e) => this.setState({[field]: e.target.value})
    )
  }

  handleSubmit(e){
    e.preventDefault();
    window.alert("SUBMITEED");
    //create a new message

  }


  render(){
    console.log(this.state.input);

    return(

      <div className="col s10">

        <div className="top-row">

        Top Row

        </div>

        <div>
        {this.renderConversations()}
        </div>

        <div className="bottom-row">
          <form onSubmit={this.handleSubmit} className="msg-input-wrapper">
            <button type="button" className="msg-input-gif"> Click </button>
            <input
            id="msg-input"
            value={this.state.input}
            onChange={this.handleInput('input')} />

          </form>


        </div>
      </div>

    );
  }


}

export default connect(mapStateToProps,mapDispatchToProps)(Message);

function mapStateToProps(state){
  return (
    {

    }
  );
};


function mapDispatchToProps(dispatch){
  return(
    {

    }
  )

};
