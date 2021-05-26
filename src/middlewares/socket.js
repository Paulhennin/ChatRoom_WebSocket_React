import { WS_CONNECT, SEND_MESSAGE, addMessage } from 'src/actions';

let socket;

export default (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      console.log(`case`, WS_CONNECT);
      socket = window.io('http://localhost:3001');

      socket.on('server_message', (message) => {
        const addMessageAction = addMessage(message);
        console.log('le server envoie un message', message);
        store.dispatch(addMessageAction);
      });

      break;
    }
    case SEND_MESSAGE: {
      const state = store.getState();
      const message = {
        author: state.pseudo,
        content: state.newMessage,
      };
      socket.emit('client_message', message);
      break;
    }
    default:
      next(action);
  }
};
