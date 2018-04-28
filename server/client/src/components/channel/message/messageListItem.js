import React, {Component} from 'react';

class MessageListItem extends Component{
  constructor(props){
    super();
  }

  componentDidMount(){
    console.log(this.props);
  }

  render(){

    let {body,author,timestamp} = this.props

    return(
      <li className="li-message">
        <div className="message-details">
          <div className="name-and-date">
            <div className="author-div"> {author} </div>
            <div className="timestamp-div"> {timestamp} </div>
          </div>

          <span> {body} </span>
        </div>


      </li>
    );
  }


}

export default MessageListItem;
