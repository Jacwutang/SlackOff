import React, { Component } from 'react';
import {connect} from 'react-redux';

import './index.css';

class Message extends Component {
  render(){
    return(

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

    );
  }


}

export default connect(mapStateToProps,mapDispatchToProps)(Message);

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
