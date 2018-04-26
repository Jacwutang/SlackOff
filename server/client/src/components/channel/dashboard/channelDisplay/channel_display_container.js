import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import ChannelDisplay from './channelDisplay';

import { createChannel, fetchChannels } from '../../../../actions/index';

function mapStateToProps(state,ownProps){
  const { channels,auth } = state;
  // console.log(state.auth, "INSIDE CONTAINER");

  return {
    channels: state.channels,
    auth_type: Object.keys(auth)[0]

  };

}

function mapDispatchToProps(dispatch){
  return{
      createChannel: (channel) => dispatch(createChannel(channel)),
      fetchChannels: () => dispatch(fetchChannels()),
  };

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelDisplay));
