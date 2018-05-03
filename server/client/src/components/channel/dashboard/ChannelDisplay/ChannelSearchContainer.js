import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import ChannelSearch from './ChannelSearch';

import {fetchAllChannels, joinChannel} from 'actions/index';

function formatChannelsToArray(state,ownProps){
  if(state.search === undefined || Object.keys(state.search).length === 0)
    return [];

  let array = Object.values(state.search).map( (channel) => channel)

  return array;

}


function mapStateToProps(state,ownProps){
  return{
    channels: formatChannelsToArray(state,ownProps),
    channelsObject: state.channels,
  }

}

function mapDispatchToProps(dispatch){
  return {
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    joinChannel: (channel_id) => dispatch(joinChannel(channel_id)),
  }

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ChannelSearch));
