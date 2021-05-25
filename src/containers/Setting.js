import { connect } from 'react-redux';
import Setting from 'src/components/Setting';
import {
  changeOpenState,
  login,
} from '../actions';

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
  emailValue: state.inputUserPwd,
  pwdValue: state.inputUserEmail,
  user: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  // Toggle
  onClickShowForm: () => {
    const action = changeOpenState();
    dispatch(action);
  },
  // Submit form User
  onSubmitUserForm: () => {
    dispatch(login());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
