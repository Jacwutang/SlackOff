import React, {Component} from 'react';
import 'assets/css/Message/message.css';


class MessageInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log("MESSAGE INPUT COMPONENT MOUNTED");

  }

  handleInput(field){

    return( (e) => {
      this.setState({ [field]: e.target.value} );
    });

  }

  handleSubmit(e){
    e.preventDefault();

    this.props.createMessage(this.state.input, this.props.channel._id).then( (action) => {
      this.props.socket.emit('broadcastMessage', action.payload);
      this.setState({input: ''})

    });


  }



  render(){
    const {channel} = this.props;

    return(
      <div className="bottom-row">
        <form onSubmit={this.handleSubmit} className="msg-input-wrapper">
          <button type="button" className="msg-input-gif">
            <i className="fas fa-keyboard"></i>
          </button>
          <input
          id="msg-input"
          placeholder=
          { (channel === undefined)?
            `Message `:
            `Message #${channel.name}`

          }
          value={this.state.input}
          onChange={this.handleInput('input')} />

        </form>


      </div>
    );
  }


};


export default MessageInput;
