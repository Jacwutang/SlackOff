import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header_container';
import Footer from '../footer/Footer';
import './session.css';

class SessionForm extends Component{
  constructor(props){
    super(props);
    this.animateDemo = this.animateDemo.bind(this);

    this.demoUsername = ['d','e','m','o','u','s','e','r'];
    this.demoPassword = ['p','a','s','s','w','o','r','d'];

    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount(){


    if(this.props.auth === true){
      //if there is a currentUser already, re-direct them home
      this.props.history.push('/');

    }
  }

  componentWillReceiveProps(nextProps){
    //if user switches to registration or vice-versa. Clear the form
    if(this.props.form_type !== nextProps.form_type){
      this.demoUsername = ['d','e','m','o','u','s','e','r'];
      this.demoPassword = ['p','a','s','s','w','o','r','d'];
      this.setState({username: '', password: ''});
    }
  }

  animateDemo(e){
    e.preventDefault();


    if (this.demoUsername.length > 0){

      window.setTimeout( () => {

        let currentUsername = this.state.username;
        currentUsername += this.demoUsername.shift();

        this.setState({username: currentUsername});
        this.animateDemo(e);

      },150);

    } else if(this.demoPassword.length > 0){

      window.setTimeout( () => {

        let currentPassword = this.state.password;
        currentPassword += this.demoPassword.shift();

        this.setState({password: currentPassword});
        this.animateDemo(e);

      },150);
    }

  }







  renderContent(){
    switch(this.props.form_type){
      case 'login':
        return(
          <div>
            <div className="div-account">
             Don't have an account? &nbsp;
            <Link to="/session/signup">
              <span style={{color: 'blue'}}>Register</span>
            </Link>

            </div>

            <div className="input-buttons">
              <button className="authBtn" onClick={this.animateDemo}>
              Demo Login
              </button>

              <button className="loginBtn loginBtn-google">
              <a href="/auth/google"> Login with Google </a>
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
              <span style={{color: 'blue'}}>Login</span>
            </Link>

            </div>

            <div className="input-buttons">
              <button className="authBtn">
              Register
              </button>

              <button className="loginBtn loginBtn-google">
              <a href="/auth/google"> Signup with Google </a>
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
          <Header />

          <div className="session-container">

              <form className="session-form">


                <input placeholder="Enter Username" className="input-session" value={this.state.username} type="text"/>


                <input placeholder="Enter Password" className="input-session" value={this.state.password} type="password"/>

                {this.renderContent()}



              </form>


          </div>
          <Footer />
        </div>




    )

  }
}

export default SessionForm;
