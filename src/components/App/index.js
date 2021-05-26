// == Import npm
import React, { useEffect } from 'react';
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Setting from 'src/containers/Setting';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
// == Composant
const App = ({ wsConnect }) => {
  // au 1e rendu de Chatroom je veux exécuter une fonction
  // qui me permettra de me connecter au websocket
  useEffect(() => {
    wsConnect();
  }, []);

  return (

    <div className="app">
      <Setting />
      <Messages />
      <Form />
    </div>
  );
};
App.propTypes = {
  wsConnect: PropTypes.func.isRequired,
};

// == Export
export default App;
