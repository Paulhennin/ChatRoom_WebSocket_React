import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Send } from 'react-feather';
import classNames from 'classnames';

export default function Form({ newMessage, onSubmitMessage, onChangeMessage }) {
  const [error, setError] = useState();

  const handleMessageChange = (event) => {
    onChangeMessage(event.target.value);
  };
  const handleMessageClick = (event) => {
    event.preventDefault();
    if (newMessage.length >= 2) {
      setError('');
      onSubmitMessage();
    }
    else {
      setError('Vous devez mettre au moins 3 caractères');
    }
  };
  return (
    <div>
      <form
        className="form"
        onSubmit={handleMessageClick}
      >
        <input
          className={classNames('form__input', { 'form__input--error': error })}
          type="text"
          placeholder="Saisir votre message..."
          onChange={handleMessageChange}
          value={newMessage}
        />
        <button
          className="form__button"
          type="submit"
        >
          <Send color="#1da5ff" size={48} />
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
