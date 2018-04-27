import React, {Component} from 'react';

class MessageListItem extends Component{
  constructor(props){
    super();
  }

  componentDidMount(){
    console.log(this.props, "MESSAGE LIST ITEM");
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
