import { connect } from 'react-redux';
import Setting from 'src/components/Setting';
import {
  changeOpenState,
  changeEmailValue,
  changePwdValue,
  submitUserForm,
} from '../actions';

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
  emailValue: state.inputUserPwd,
  pwdValue: state.inputUserEmail,
  user: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  onClickShowForm: () => {
    const action = changeOpenState();
    console.log('ici je lance ma nouvelle fonction', action);
    dispatch(action);
  },
  onChangeEmail: (value) => {
    const action = changeEmailValue(value);
    console.log('email value');
    dispatch(action);
  },
  onChangePwd: (value) => {
    const action = changePwdValue(value);
    console.log('Pwd Value');
    dispatch(action);
  },
  onSubmitUserForm: (user, pwd) => {
    const action = submitUserForm(user, pwd);
    console.log('On submit form');
    dispatch(action);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
