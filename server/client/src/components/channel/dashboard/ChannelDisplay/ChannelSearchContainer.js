import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import ChannelSearch from './ChannelSearch';

import {fetchAllChannels} from 'actions/index';

function formatChannelsToArray(state,ownProps){
  if(state.channels === undefined || Object.keys(state.channels).length === 0)
    return [];

  let array = Object.values(state.channels).map( (channel) => channel)

  return array;

}


function mapStateToProps(state,ownProps){
  return{
    channels: formatChannelsToArray(state,ownProps),
  }

}

function mapDispatchToProps(dispatch){
  return {
    fetchAllChannels: () => dispatch(fetchAllChannels()),
  }

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ChannelSearch));
