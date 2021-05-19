import { connect } from 'react-redux';
import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = () => ({});
const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = componentToConnect(Messages);

export default connectedComponent;
