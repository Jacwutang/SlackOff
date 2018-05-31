const mongoose = require("mongoose");
const Channel = mongoose.model("Channel");
const User = mongoose.model("User");

module.exports = app => {
  //create a channel
  app.post("/api/channel/new", (req, res) => {
    const { name, type } = req.body;

    let newChannel = {
      name: name,
      members: [req.user],
      is_dm: false
    };

    Channel.create(newChannel, (err, channel) => {
      if (err) {
        "ERROR IS", err;
        res.status(400).send({ message: err.errors.name.message });
      } else {
        User.update(
          { _id: req.user.id },
          { $push: { channels: channel._id } },
          (err, success) => {
            if (err) {
              ("error update user");
            }
          }
        );

        Channel.findOne({ _id: channel._id }).exec(function(err, docs) {
          if (err) {
            ("error populating channel users");
          } else {
            res.send(docs);
          }
        });
      }
    });
  }); //create channel

  app.get("/api/channels/user", (req, res) => {
    const { user } = req;

    User.findOne({ _id: user.id })
      .populate("channels")
      .exec(function(err, docs) {
        if (err) {
          res
            .status(401)
            .send({ message: "Error occured finding user's channels" });
        } else {
          docs.channels, "CHANNELS FETCHARE ARE";
          res.send(docs.channels);
        }
      });
  }); // get user's Channels

  app.get("/api/channel/channel_id", (req, res) => {
    const { user } = req;
    const { channel_id } = req.query;

    Channel.findOne({ _id: channel_id }, (err, doc) => {
      if (doc) {
        // (doc, "The SINGLE Channel fetched is", doc);
        res.send(doc);
      } else {
        // ("ERROR FETCHING SINGLE CHANNEL")
      }
    });
  }); // get single channel

  app.get("/api/channels", (req, res) => {
    Channel.find({}, (err, docs) => {
      if (docs) {
        // ("FETCH ALL CHANNELS", docs);
        res.send(docs);
      }
    });
  }); // grab all channels

  app.post("/api/channel/join", (req, res) => {
    const { user } = req;
    const { channel_id } = req.body;

    Channel.findOneAndUpdate(
      { _id: channel_id },
      { $addToSet: { members: { _id: user.id } } },
      { new: true },
      (err, channel) => {
        if (channel) {
          User.update(
            { _id: user.id },
            { $push: { channels: { _id: channel_id } } },
            { new: true },
            (err, doc) => {
              if (err) {
              } else {
                "SUCCESS", channel;
                res.send(channel);
              }
            }
          );
        }
      }
    );
  });
};
