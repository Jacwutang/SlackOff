import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import ChannelList from './ChannelList';


import {fetchChannels} from 'actions/index';
import {RECEIVE_CHANNEL} from 'actions/types';

function checkValidChannels(state){
    if(Object.keys(state.channels).length > 0){
      //format channels by removing outer channel_id key
      let objSpread = Object.keys(state.channels).map((key) => {
        return state.channels[key];

      });

      return objSpread;

    } else{
      return [];
    }
}



function mapStateToProps(state,ownProps){
  const { channels,auth } = state;

  return {
    channels: checkValidChannels(state),
    channelsObj: channels,
    searchChannels: state.search,
    auth_type: Object.keys(auth)[0],
    type: ownProps.match.params.type,
    type_id: ownProps.match.params.type_id



  };

}

function mapDispatchToProps(dispatch){
  return{

      fetchChannels: () => dispatch(fetchChannels()),



  };

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList));
