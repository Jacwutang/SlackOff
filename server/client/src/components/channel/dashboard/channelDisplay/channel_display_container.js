import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import ChannelDisplay from './channelDisplay';

import { createChannel, fetchChannels } from '../../../../actions/index';

function mapStateToProps(state,ownProps){
  const { channels,auth } = state;
  // console.log(state.auth, "INSIDE CONTAINER");

  return {
    channels: Object.keys(channels).map(key => state.channels[key]),
    auth_type: Object.keys(auth)[0]

  };

}

function mapDispatchToProps(dispatch){
  return{
      createChannel: (channel) => dispatch(createChannel(channel)),
      fetchChannels: () => dispatch(fetchChannels()),
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDisplay);
