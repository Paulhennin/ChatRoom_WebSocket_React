import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

import './style.scss';

export default function Setting({
  isOpen,
  onClickShowForm,
  onSubmitUserForm,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUserForm();
    // console.log(`submit du form`);
    /*
    axios.post('http://localhost:3001/login', {
      email: 'acidman@herocorp.io',
      password: 'fructis',
    })
      .then((response) => console.log(`response`, response))
      .catch((error) => console.log(`error`, error));
  */
  };

  const handleClick = () => {
    onClickShowForm();
  };
  const classnames = isOpen ? 'rotate toggler--open' : 'toggler';
  return (
    <div className="setting">
      <button
        type="button"
        className={classnames}
        onClick={handleClick}
      >
        +
      </button>
      {isOpen && (
        <form className="setting__form" onSubmit={handleSubmit}>
          <Field
            type="email"
            name="email"
            placeholder="Email"
          />
          <Field
            type="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit" className="setting__form-button">Envoyer</button>
        </form>
      )}
    </div>
  );
}

Setting.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClickShowForm: PropTypes.func.isRequired,
  onSubmitUserForm: PropTypes.func.isRequired,
};
