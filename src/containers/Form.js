import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { sendMessage, pushNewInput } from '../actions';

const mapStateToProps = (state) => ({
  newMessage: state.newMessage,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitMessage: () => {
    const action = sendMessage();
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
