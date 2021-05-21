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
      <form
        className="form"
        onSubmit={handleMessageClick}
      >
        <input
          className="form__input"
          type="text"
          onChange={handleMessageChange}
          placeholder="Saisir votre message..."
          value={newMessage}
        />
        <button
          className="form__button"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  newMessage: PropTypes.string.isRequired,
  onSubmitMessage: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
};
