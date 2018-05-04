import React, {Component} from 'react';
import axios from 'axios';
import 'assets/css/Message/message.css'

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const endingHash = {1: "st", 2: "nd", 3: "rd" };



class MessageListItem extends Component{
  constructor(props){
    super();
    this.state = {
      picture: '',
    }

  }

  componentDidMount(){
    axios.get('/api/avatars').then(resp => {
    let picture = resp.data.results[0].picture.thumbnail;
    this.setState({ picture: picture});
    });
  }

  renderDivideLine(){
    const {renderDivideLine,day,month,date} = this.props;

    let end = (date <= 3)? endingHash[date]: "th";

    if(renderDivideLine == true){
      return(
          <li className="message-list-divider">
            <span> {day}, {month} {date}{end} </span>
          </li>
      )
    } else{
      return null;
    }



  }

  render(){
      // if(!this.state.loaded){
      //   return null;
      // }
    const {body,author,hour,minutes,period} = this.props;

    return(
      <div>
        {this.renderDivideLine()}
        <li className="li-message">

          <div className="img-container-channel-thumbnail">
            <img className="thumbnail-img" src={this.state.picture} />
          </div>
          <div className="message-details">

            <div className="name-and-date">
              <div className="author-div"> {author} </div>
              <div className="timestamp-div"> {hour} {minutes} {period} </div>
            </div>

            <div> {body} </div>
          </div>


        </li>
      </div>
    );
  }


}

export default MessageListItem;
