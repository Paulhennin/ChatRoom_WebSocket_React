import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
}
