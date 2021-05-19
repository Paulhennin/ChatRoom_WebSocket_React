import React from 'react';
import PropTypes from 'prop-types';

import Message from 'src/components/Message';

import './style.scss';

export default function Messages({ messages }) {
  const chatBox = messages.map((message, i) => {
    console.log(message);
    return <Message text={message} key={i} />;
  });
  return (
    <div className="messages">
      Boite à messages
      {chatBox}
    </div>
  );
}
Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};
