import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Form({ newMessage, onSubmitMessage, onChangeMessage }) {
  const handleMessageChange = (event) => {
    onChangeMessage(event.target.value);
  };
  const handleMessageClick = (event) => {
    event.preventDefault();
    onSubmitMessage(newMessage);
  };
  return (
    <div>
      <form action="" onSubmit={handleMessageClick}>
        <input
          type="text"
          onChange={handleMessageChange}
          value={newMessage}
        />
      </form>
    </div>
  );
}

Form.propTypes = {
  newMessage: PropTypes.string.isRequired,
  onSubmitMessage: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
};
