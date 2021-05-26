import {
  ADD_MESSAGE,
  SEND_NEW_INPUT,
  OPEN_STATE,
  CHANGE_VALUE,
  SAVE_PSEUDO,
} from 'src/actions';
import { getHighestId } from 'src/selectors';

const initialState = {
  messages: [
    {
      id: 1,
      author: 'Jean Michel',
      content: 'Salut ça va ?',
    },
    {
      id: 2,
      author: 'Super chat',
      content: 'T\'as pas des croquettes ?',
    },
    {
      id: 3,
      author: 'Super chat',
      content: 'stp',
    },
    {
      id: 4,
      author: 'Anonyme',
      content: 'Non j\'ai pas déso',
    },
  ],
  pseudo: 'Anonyme',
  newMessage: '',
  isOpen: false,
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_NEW_INPUT:
      return {
        ...state,
        newMessage: action.newInput,
      };
    case ADD_MESSAGE: {
      const newMessages = [
        ...state.messages,
        action.message,
      ];
      return {
        ...state,
        newMessage: '',
        messages: newMessages,
      };
    }
    case OPEN_STATE:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };
    case SAVE_PSEUDO:
      return {
        ...state,
        pseudo: action.pseudo,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default reducer;
