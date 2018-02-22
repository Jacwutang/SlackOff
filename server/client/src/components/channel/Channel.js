import React, { Component } from 'react';
import './Channel.css';

class Channel extends Component {
  render(){
    return(

    <div className="row">

      <div className="col s2">
        Here
      </div>

      <div className="col s10">

        <div className="top-row">

        Top Row

        </div>

        <div>
        Middle content
        </div>

        <div className="bottom-row">
          Bottom Row
        </div>
      </div>

    </div>


    );
  }
};

export default Channel;
