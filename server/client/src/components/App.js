import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Channel from './channel/Channel';
import SessionForm from './session/session_form_container';

class App extends Component{

  componentDidMount(){
    this.props.fetchUser();

  }


  render(){
    return(

          <BrowserRouter>
            <div>
              <Route exact path="/" component={Landing} />
              <Route exact path="/messages" component={Channel} />
              <Route exact path="/messages/:type/:type_id" component={Channel } />
              <Route exact path="/session" component={SessionForm} />
            </div>

          </BrowserRouter>


    );
  }




};

export default connect(null, actions)(App);
