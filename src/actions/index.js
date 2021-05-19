export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
export const SEND_NEW_INPUT = 'SEND_NEW_INPUT';

export const pushNewMessage = (newMessage) => ({
  type: SEND_NEW_MESSAGE,
  newMessage: newMessage,
});

export const pushNewInput = (newInput) => ({
  type: SEND_NEW_INPUT,
  newInput: newInput,
});
