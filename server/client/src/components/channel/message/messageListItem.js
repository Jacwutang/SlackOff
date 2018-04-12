import React, {Component} from 'react';

class MessageListItem extends Component{
  constructor(props){
    super();
  }

  componentDidMount(){
    
  }

  render(){

    let {body} = this.props

    return(
      <li>

      {body}

      </li>
    );
  }


}

export default MessageListItem;
