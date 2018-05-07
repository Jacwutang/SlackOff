![Header](https://i.imgur.com/w9bqPgp.png)

### Check out the live [Application](http://slax.us)!

## Technologies

* Express/Node.js
* React
* Redux
* Websockets (Socket.io)

The purpose of this project was to build a full stack application with the functionality and design of a currently existing website that meets predefined feature specifications. The core feature set built was #Live Chat, #User Authentication, #Channels and #Direct Messages.

## Notable Features

### Live Chat

<img src='http://res.cloudinary.com/dbtepon6n/image/upload/v1525735040/livechat.gif' />

Slax utilizes websockets via [Socket.io](https://socket.io/) to establish real-time chat. When a user submits a new message, the client emits an signal the server to broadcast a message to others who are viewing the channel.

* When our Message component mounts, we subscribe an open connection to Socketio. We then make sure to unsubscribe it when the component will unmount.

```javascript
componentWillUnmount() {
  socket.unsubscribe(`channel-${this.props.match.params.channelId}`);
}

componentDidMount() {
 this.props.socket.on('receiveMessage', (payload) => {
        this.props.fetchMessage(payload);
      });


 this.props.socket.on('subscribedChannel', (payload) => {
        this.props.fetchSingleChannel(payload._id);
      });
}
```
* When a user submits a message, our Node server will trigger that open connection and send a json message to it. Socket.io will then update the client instantly.

```javascript
io.on('connection', (socket) => {



  socket.on('joinChannel', (payload) => {
    socket.join(payload._id);
    socket.broadcast.to(payload._id).emit('subscribedChannel', payload);
  });


```

## Live Search
Using Regex and pattern matching, we were able to implement search for channels and active highlighting with each keystroke.

<img src='http://res.cloudinary.com/dbtepon6n/image/upload/v1525734577/livesearch.gif' />

```javascript
  findMatches(word, channels){
    return channels.filter( (channel) => {
      const regex = new RegExp(word, 'gi');
      return channel.name.match(regex);

    })
  }


```

```javascript
render(){


    const {channel, match} = this.props;



    const regex = new RegExp(match, 'gi');


    const channelName = channel.name.replace(regex, ` <span class="highlight-name"> ${match} </span>`);

      return(
        <div className="search-channel-details">
          <li className="li-search-results" onClick={this.handleClick} dangerouslySetInnerHTML={{__html:channelName}} />
          <span> Created on {this.formatTime()} </span>
        </div>
    )
  }

};
```



### Multiple User authentication strategies
Incorporating Passport.js authentication strategies, we were able to incorporate a traditional login (username and password) along with social media login using Google's Oauth API.

<img src='http://res.cloudinary.com/dbtepon6n/image/upload/v1525734576/locallogin.gif' /> <img src='http://res.cloudinary.com/dbtepon6n/image/upload/v1525734577/googlelogin.gif' />

#Local-Login
```javascript
passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) { 

```

#Google-Login
```javascript

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, async (accessToken, refreshToken,profile,done) => {
    
      const existingUser = await User.findOne({ 'google.googleId': profile.id })

            if(existingUser){
              done(null, existingUser);
            } else{
                const user =  new User();
                user.google.googleId = profile.id;
                user.google.displayName = profile.displayName;

                user.save(function(err) {
                    if (err){
                      throw err;
                    } else{
                        return done(null, user);
                    }
                });
            }
        })
);

```

### Error validations
Any database validation errors are caught and prompt error messages are displayed to the user.

* User authentication errors validation
<img src='http://res.cloudinary.com/dbtepon6n/image/upload/v1525736579/usernameexists.gif' /> <img src='http://res.cloudinary.com/dbtepon6n/image/upload/v1525736577/incorrectpassword.gif' /> <img src='http://res.cloudinary.com/dbtepon6n/image/upload/v1525736576/invalidcredentials.gif' />






* Create Channel errors validation
<img src='http://res.cloudinary.com/dbtepon6n/image/upload/v1525736907/channelerrors.gif' />












## Future Plans

* Live Notifications
* Infinite scroll (continuous fetch)
* Giphys and emojis
