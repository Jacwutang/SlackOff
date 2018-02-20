import React, {Component} from 'react';
import './navbar.css';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent(){
    switch(this.props.auth){
      case null:
        return;

      case false:
        return(
          <li>
            <a href= "">
              <span> Log In </span>
            </a>
          </li>
        );
      default:
        return (
          <li>
            <a href= "">
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


// <li>
//   <a href="">
//     <span>Log In</span>
//   </a>
// </li>
//
// <li>
//   <a href="">
//     <span> Sign Up </span>
//   </a>
// </li>
