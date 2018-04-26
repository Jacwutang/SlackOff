import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Channel from './channel/Channel';
import SessionForm from './session/session_form_container';
import Header from './header/Header';
import Footer from './footer/Footer';

import axios from 'axios';

class App extends Component{

   componentDidMount(){

    // this.props.fetchUser();

  }


  render(){
    return(

          <BrowserRouter>
            <div>


                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/messages" component={Channel} />
                  <Route exact path="/messages/:type/:type_id" component={Channel } />
                  <Route exact path="/session/:form_type" component={SessionForm} />

                </Switch>



            </div>

          </BrowserRouter>


    );
  }




};

export default connect(null, actions)(App);
