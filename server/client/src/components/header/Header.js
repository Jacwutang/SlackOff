import React, {Component} from 'react';
import './navbar.css';

class Header extends Component {
  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="" className="brand-logo">
           <img src={require("../../images/Slack_Mark_Web.png")} alt="logo" width={75}  />
          <span className="logo-span">SlackOff</span>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="">
                <span>Why SlackOff?</span>
              </a>
            </li>

            <li>
              <a href="">
                <span>Log In</span>
              </a>
            </li>

            <li>
              <a href="">
                <span> Sign Up </span>
              </a>
            </li>

          </ul>
        </div>
      </nav>

    );
  }

};

export default Header;
