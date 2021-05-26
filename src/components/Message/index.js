import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Message({ author, content, pseudo }) {
  const classnames = author === pseudo ? 'message message--is-mine' : 'message';

  return (
    <div className={classnames}>
      <p className="message__author">{author}</p>
      <p className="message__content">{content}</p>
    </div>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
};
