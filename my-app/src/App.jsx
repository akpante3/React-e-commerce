import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faShoppingBag, faStar } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.scss';
import Routes from './routes/routes';

library.add(faStroopwafel, fab, faShoppingBag, faStar);


function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
