import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './session.css';

class SessionForm extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props);
  }

  renderContent(){
    switch(this.props.form_type){
      case 'login':
        return(
          <div>
            <div className="div-account">
             Don't have an account? &nbsp;
            <Link to="/session/signup">
              Register
            </Link>

            </div>

            <div className="input-buttons">
              <button className="authBtn">
              Demo Login
              </button>

              <button className="loginBtn loginBtn-google">
              Login with Google
              </button>
            </div>
          </div>
        );
      default:
        return(
          <div>
            <div className="div-account">
             Already have an account? &nbsp;
            <Link to="/session/login">
              Login
            </Link>

            </div>

            <div className="input-buttons">
              <button className="authBtn">
              Register
              </button>

              <button className="loginBtn loginBtn-google">
              Signup with Google
              </button>
            </div>
          </div>
        );







    }

  }


  render(){

    const {form_type} = this.props;


    return(
      <div className="container">

        <div className="session-container">

            <form className="session-form">


              <input placeholder="Enter Username" className="input-session" type="text"/>


              <input placeholder="Enter Password" className="input-session" type="password"/>

              {this.renderContent()}



            </form>


        </div>

      </div>

    )

  }
}

export default SessionForm;



// <div className="div-account">
//  Don't have an account? &nbsp;
// <Link to="/signup">
//   Sign up
// </Link>
//
// </div>
//
// <div className="input-buttons">
//   <button className="authBtn">
//   Demo Login
//   </button>
//
//   <button className="loginBtn loginBtn-google">
//   Login with Google
//   </button>
// </div>
