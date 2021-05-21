import React from 'react';
import PropTypes from 'prop-types';

import Message from 'src/components/Message';

import './style.scss';

export default function Messages({ messages }) {
  const chatBox = messages.map((message) => {
    console.log(message);
    return (<Message
      key={message.id}
      {...message}
    />
    );
  });
  return (
    <div className="messages">
      {chatBox}
    </div>
  );
}
Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};
