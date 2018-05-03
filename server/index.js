const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const flash    = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const http = require('http').Server(app);
const io = require('socket.io')(http);


//listen to port 5000, which is default react port
const PORT = process.env.PORT ||  5000;



http.listen(PORT, () => {
  console.log('listening on *:5000');
});


io.on('connection', (socket) => {



  socket.on('joinChannel', (payload) => {
    console.log(payload, "PAYLOAD BACKEND");
    socket.join(payload._id);
    socket.broadcast.to(payload._id).emit('subscribedChannel', payload);
  });


  socket.on('broadcastMessage', (payload) => {


    //broadcast to everybody except me.
    socket.broadcast.to(payload.channel).emit('receiveMessage',payload);
    console.log("Message received backend",payload)
  });



  socket.on('disconnect', () => {

  });



});





require('./models/User');
require('./models/Channel');
require('./models/Message');



require('./services/passport');




mongoose.connect(keys.mongoURI);





app.use(cookieParser());
app.use(session({
  secret: 'slack',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
  }));



// passport.initialize middleware is invoked on every request
app.use(passport.initialize());
//passport.session middleware is a Passport Strategy which will load the user object onto req.user or req.session? if a serialised user object was found in the server.
app.use(passport.session());
// app.use(flash());

//load route handlers
require('./routes/authRoutes')(app);
require('./routes/channelRoutes')(app);
require('./routes/messageRoutes')(app);
require('./routes/userRoutes')(app);

app.get('/api/avatars', (req,res) => {
  // console.log("api/avatars route hit");

  const url = "https://randomuser.me/api/";

  let results = axios.get(url).then((response) => {
    return response.data;
  })
  .then(resp => {
    res.send(resp);
  });


});


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // Like main.js or main.css files
  app.use(express.static('server/client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// app.listen(PORT);
