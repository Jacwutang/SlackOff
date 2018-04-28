import React, {Component} from 'react';
import axios from 'axios';

//placeholder msg
class MessageListItem extends Component{
  constructor(props){
    super();
    this.state = {
      loaded: false,
      picture: '',
    }

  }

  async componentDidMount(){
    let res = await axios.get('https://randomuser.me/api/');

    let picture = res.data.results[0].picture.thumbnail;

    this.setState({loaded:true, picture: picture});

  }

  formatTime(){

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



    const {timestamp, time_zone} = this.props;

    let offset = new Date(timestamp) - (time_zone*60000);

    let local_time_str = new Date(offset).toISOString();
    // 2018-04-28T14:15:13.923Z
    // console.log(local_time, "local_time ISOString");
    let local_time = new Date(local_time_str.slice(0,-1));




    let hour = (local_time.getHours() > 12 )?
    `${local_time.getHours()- 12}` : local_time.getHours();



    let minutes = (local_time.getMinutes() < 10)?
    `0${local_time.getMinutes()}` : local_time.getMinutes();




    let day = dayNames[local_time.getDay()];
    let month = monthNames[local_time.getMonth() + 1];
    let period = (local_time.getHours() <= 11)? "AM" : "PM";
    let date = (local_time.getDate());

    return(
      `
      ${hour}:${minutes} ${period}

      `
    );


  }


    render(){
      if(!this.state.loaded){
        return null;
      }
    const {body,author} = this.props;

    return(
      <li className="li-message">
        <div className="img-container">
          <img className="thumbnail-img" src={this.state.picture} />
        </div>
        <div className="message-details">
          <div className="name-and-date">
            <div className="author-div"> {author} </div>
            <div className="timestamp-div">  {this.formatTime()} </div>
          </div>

          <span> {body} </span>
        </div>


      </li>
    );
  }


}

export default MessageListItem;
