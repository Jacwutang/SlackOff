import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import ChannelAddModal from './ChannelAddModal';
import {RECEIVE_CHANNEL} from 'actions/types';
import {createChannel} from 'actions/index';

function mapStateToProps(state,ownProps){
  return {

    errors: state.errors.channel,
    type: ownProps.match.params.type,
    type_id: ownProps.match.params.type_id
  }
}

function mapDispatchToProps(dispatch){
   return{
     clearErrors: () => dispatch({type: RECEIVE_CHANNEL, payload: []}),
     createChannel: (channel,type) => dispatch(createChannel(channel,type)),
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ChannelAddModal));
