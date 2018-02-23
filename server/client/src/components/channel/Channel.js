import React, { Component } from 'react';
import {connect} from 'react-redux';


import './Channel.css';

class Channel extends Component {
  render(){
    return(

    <div className="row">

      <div className="col s2">
        Side column
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

export default connect(mapStateToProps,mapDispatchToProps)(Channel);

function mapStateToProps(state){
  return (
    {

    }
  )
};


function mapDispatchToProps(dispatch){
  return(
    {

    }
  )

};
