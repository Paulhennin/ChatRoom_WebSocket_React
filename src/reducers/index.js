import {
  SEND_NEW_MESSAGE,
  SEND_NEW_INPUT,
} from 'src/actions';

const initialState = {
  messages: [
    'Ce Chat est génial',
    'Je te le fait pas dire',
    "j'ai pas compris",
    'encore un tour sur la journée ?',
    'Challenge ?',
  ],
  newMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_NEW_INPUT:
      return {
        ...state,
        newMessage: action.newInput,
      };
    case SEND_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.newMessage],
        newMessage: '',
      };
    default:
      return state;
  }
};

export default reducer;
