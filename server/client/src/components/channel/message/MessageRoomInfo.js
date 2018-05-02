import React, { Component } from 'react';
import {connect} from 'react-redux';


import 'assets/css/Message/message.css';
import {FoldingCube} from 'better-react-spinkit';


class MessageRoomInfo extends Component{
  constructor(props){
    super(props);
    this.state = {

    }

    this.showComponent = this.showComponent.bind(this);
  }

  componentDidMount(){
    console.log("MOUNTED", this.props);
  }

  triggerInputCSS(e){
    e.preventDefault();

    e.currentTarget.classList.add("selected");
  };

  exitInputCSS(e){
    e.preventDefault();

    e.currentTarget.classList.remove("selected");
  }


  showComponent(){
    this.props.toggleShowComponent();
  }

  handleInput(field){
    return(
      (e) => this.setState({[field]: e.target.value})
    );
  }

  renderTopRowLeft(){


    return(

      <div className="top-row-left">

        <h4 className="channel-name-header">
          {` # ${this.props.channel.name}`}
        </h4>

        <span className="channel-people">
          <i className="far fa-user fa-2x" aria-hidden="true">
            
          </i>
          <span> <strong> {this.props.channel.members.length} </strong> </span>
        </span>

        <a className="a-channel-info" onClick={this.showComponent}>
          <i className="fas fa-info-circle fa-2x"></i>
        </a>

      </div>
    );

  }

  renderTopRowRight(){


    return (
      <div className="top-row-right">

        <form className="msg-input-wrapper search-container" onClick={this.triggerInputCSS} onBlur={this.exitInputCSS}>
          <button type="button" className="msg-input-gif">
            <i className="fas fa-search"></i>
          </button>
          <input
          id="msg-input"
          placeholder="Search"
          value={this.state.search}
          onChange={this.handleInput('search')} />
        </form>

      </div>

    );
  }




  render(){


    return(
      <div className="top-row">

        {this.renderTopRowLeft()}
        {this.renderTopRowRight()}

      </div>
    );
  }

}
export default MessageRoomInfo;
