// == Import npm
import React from 'react';
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Setting from 'src/containers/Setting';

// == Import
import './styles.scss';
// == Composant
const App = () => (
  <div className="app">
    <Setting />
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
