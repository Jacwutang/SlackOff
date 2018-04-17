import React, {Component} from 'react';
import './session.css';

class SessionForm extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="container">

        <div className="session-container">

            <form className="session-form">


              <input placeholder="Enter Username" className="input-session" type="text"/>


              <input placeholder="Enter Password" className="input-session" type="password"/>

              <div className="input-buttons">
                <button className="authBtn">
                Login with Username
                </button>

                <button className="loginBtn loginBtn-google">
                Login with Google
                </button>
              </div>

            </form>


        </div>

      </div>

    )

}
}

export default SessionForm;
