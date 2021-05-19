import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { pushNewMessage, pushNewInput} from '../actions';

const mapStateToProps = (state) => ({
  newMessage: state.newMessage,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitMessage: (value) => {
    const action = pushNewMessage(value);
    console.log('je push le nouveau message', action);
    dispatch(action);
  },
  onChangeMessage: (value) => {
    const action = pushNewInput(value);
    dispatch(action);
  },
});
const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = componentToConnect(Form);

export default connectedComponent;
