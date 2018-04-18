import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import ChannelDisplay from './channelDisplay';

import { createChannel } from '../../../../actions/index';

function mapStateToProps(state,ownProps){
  const { channels } = state;

  return {
    channels: Object.keys(channels).map(key => state.channels[key])

  };

}

function mapDispatchToProps(dispatch){
  return{
      createChannel: (channel) => dispatch(createChannel(channel))
  };

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelDisplay));
