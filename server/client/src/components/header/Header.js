import React, {Component} from 'react';
import 'assets/css/Header/header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent(){
    switch(this.props.auth){
      case null:
        return;

      case false:
        return(
          <li>
            <Link to="/session/login">
              <span> Log In </span>
            </Link>
          </li>
        );
      default:
        return (
          <li>
            <a href= "/api/logout">
              <span> Logout </span>
            </a>
          </li>
        );

    }
  }


  render(){


    return(

      <nav>


        <div className="nav-wrapper">
        <Link
          to={this.props.auth ? '/messages' : '/' }
          className="brand-logo"
        >
         <img src={require("../../images/Slack_Mark_Web.png")} alt="logo" width={75}  />
         <span className="logo-span">SlackOff</span>
        </Link>

          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>


    );
  }

};

export default Header;


 // hide-on-med-and-down
