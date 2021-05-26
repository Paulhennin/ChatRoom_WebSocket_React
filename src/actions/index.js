
// CHATBOX
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_NEW_INPUT = 'SEND_NEW_INPUT';
// OPEN USER SIGNIN
export const OPEN_STATE = 'OPEN_STATE';
export const SAVE_PSEUDO = 'SAVE_PSEUDO';
export const LOGIN = 'LOGIN';

// USER FORM
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SUBMIT_USER_FORM = 'SUBMIT_USER_FORM';
// WS CONNECT
export const WS_CONNECT = 'WS_CONNECT';

// CHAT MESSAGE START

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export const pushNewInput = (newInput) => ({
  type: SEND_NEW_INPUT,
  newInput: newInput,
});
// CHAT MESSAGE END

// ACTION ON FORM USER
export const changeOpenState = () => ({
  type: OPEN_STATE,
});

// CHANGE INPUT EMAIL / PASSWORD
export const changeValue = (value, key) => ({
  type: CHANGE_VALUE,
  value,
  key,
});

// SUBMIT FORM USER
export const submitUserForm = (email, pwd) => ({
  type: SUBMIT_USER_FORM,
  email: email,
  pwd: pwd,
});

export const login = () => ({
  type: LOGIN,
});

export const savePseudo = (pseudo) => ({
  type: SAVE_PSEUDO,
  pseudo,
});

export const wsConnect = () => ({
  type: WS_CONNECT,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});
