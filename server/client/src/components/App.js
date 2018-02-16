import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';

class App extends Component{

  componentDidMount(){
    this.props.actions.fetchUser();
  }


  render(){
    return(
        <div className="container">
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Landing} />

            </div>

          </BrowserRouter>

        </div>
    );
  }




};

export default connect(null, actions)(App);
