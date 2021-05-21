export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
export const SEND_NEW_INPUT = 'SEND_NEW_INPUT';
export const OPEN_STATE = 'OPEN_STATE';

export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PWD = 'CHANGE_PWD';
export const SUBMIT_USER_FORM = 'SUBMIT_USER_FORM';

export const pushNewMessage = (newMessage) => ({
  type: SEND_NEW_MESSAGE,
  newMessage: newMessage,
});

export const pushNewInput = (newInput) => ({
  type: SEND_NEW_INPUT,
  newInput: newInput,
});

export const changeOpenState = () => ({
  type: OPEN_STATE,
});

export const changeEmailValue = (value) => ({
  type: CHANGE_EMAIL,
  newInput: value,
});

export const changePwdValue = (value) => ({
  type: CHANGE_PWD,
  newInput: value,
});

export const submitUserForm = (email, pwd) => ({
  type: SUBMIT_USER_FORM,
  email: email,
  pwd: pwd,
});
