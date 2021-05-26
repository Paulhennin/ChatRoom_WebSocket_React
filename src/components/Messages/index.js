import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Message from 'src/containers/Message';

import './style.scss';

export default function Messages({ messages }) {
  const chatBox = messages.map((message) => (
    <Message
      key={message.id}
      {...message}
    />
  ));

  const messagesRef = useRef();

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  return (
    <div ref={messagesRef} className="messages">
      {chatBox}
    </div>
  );
}
Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
