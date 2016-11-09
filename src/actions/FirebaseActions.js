import { database } from '../firebaseApp';

const messagesRef = database.ref('messages');

function receiveMessages(messages) {
  return {
    type: 'RECEIVE_MESSAGES',
    payload: messages,
  };
}

export function startListeningToMessages() {
  return (dispatch) => {
    messagesRef.off();
    messagesRef.on('value', (snap) => {
      const messages = snap.val();
      dispatch(receiveMessages(messages));
    });
  };
}

export function createNewMessage(message) {
  messagesRef.push(message);
  return {
    type: 'CREATE_MESSAGE',
    payload: message,
  };
}
