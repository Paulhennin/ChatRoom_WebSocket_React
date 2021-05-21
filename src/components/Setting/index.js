import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Setting({
  isOpen,
  onClickShowForm,
  onSubmitUserForm,
  onChangeEmail,
  onChangePwd,
  emailValue,
  pwdValue,
  user,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUserForm(event.target[0].value, event.target[1].value);
  };

  const handleChangeEmail = (event) => {
    onChangeEmail(event.target.value);
  };

  const handleChangePwd = (event) => {
    onChangePwd(event.target.value);
  };

  const handleClick = () => {
    onClickShowForm();
  };
  console.log('user', user);
  const classnames = isOpen ? 'rotate toggler toggler--open' : 'toggler';
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
          <input
            value={pwdValue}
            className="setting__form-input"
            placeholder="Email"
            onChange={handleChangeEmail}
          />
          <input
            value={emailValue}
            className="setting__form-input"
            placeholder="Mot de passe"
            onChange={handleChangePwd}
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
  onChangeEmail: PropTypes.func.isRequired,
  onChangePwd: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  pwdValue: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};
