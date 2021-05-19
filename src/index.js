import React from 'react';
import { render } from 'react-dom';
import store from 'src/store';
import { Provider } from 'react-redux';
import App from 'src/components/App';

const target = document.getElementById('root');
const reactRootElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(reactRootElement, target);
