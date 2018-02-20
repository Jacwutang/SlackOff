import React, {Component} from 'react';
import './navbar.css';
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
            <a href= "/auth/google">
              <span> Log In </span>
            </a>
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
            to={this.props.auth ? '/channels' : '/' }
            className="brand-logo"
          >
           <img src={require("../../images/Slack_Mark_Web.png")} alt="logo" width={75}  />
           <span className="logo-span">SlackOff</span>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/demo">
                <span>Why SlackOff?</span>
              </Link>
            </li>

            {this.renderContent()}


          </ul>
        </div>
      </nav>

    );
  }

};

export default connect(mapStateToProps)(Header);


function mapStateToProps(state){
  return {
    auth: state.auth
  }

};
