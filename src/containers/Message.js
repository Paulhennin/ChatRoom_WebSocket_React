import { connect } from 'react-redux';
import Message from 'src/components/Message';

const mapStateToProps = (state) => ({
  pseudo: state.pseudo,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
