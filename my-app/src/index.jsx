import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import setStoreDefaults from './utils/setStoreDefaults';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
setStoreDefaults(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
