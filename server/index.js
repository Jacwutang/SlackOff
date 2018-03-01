const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Channel');
require('./models/Conversation');
require('./models/directMessage');
require('./models/Message');


// const Channel = mongoose.model('Channel');
// const test = new Channel({name: "Hello"});
// test.save();
//
// const User = mongoose.model('User');
// const jack = new User({googleId: 211212122, displayName: 'jack'});
// jack.save();
//
// const Convo = mongoose.model('Conversation');
// const convo1 = new Convo({members: jack._id, channel: test._id});
// convo1.save();
//
// const Message = mongoose.model('Message');
// new Message({body: "hi whats my name", author: jack._id, conversationId: convo1._id }).save();
//
//
//
// Message
// .findOne({ body: 'hi whats my name' })
// .populate('conversationId') //This populates the author id with actual author information!
// .exec(function (err, convo) {
//   if (err) return handleError(err);
//   console.log('The author is %s', convo.);
//   // prints "The author is Bob Smith"
// });
//




require('./services/passport');




mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// next 3 functions are middlewares

//makes use of cookies. (serializeUser, deserializeUser)
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// passport.initialize middleware is invoked on every request
app.use(passport.initialize());
//passport.session middleware is a Passport Strategy which will load the user object onto req.user or req.session? if a serialised user object was found in the server.
app.use(passport.session());

//load route handlers
require('./routes/authRoutes')(app);
require('./routes/channelRoutes')(app);
require('./routes/directMessageRoutes')(app);



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


const PORT = process.env.PORT ||  5000;

app.listen(PORT);
