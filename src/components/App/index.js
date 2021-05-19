// == Import npm
import React from 'react';
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';
// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <h1>Composant : App</h1>
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
