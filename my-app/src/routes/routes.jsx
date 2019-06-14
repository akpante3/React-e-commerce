import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import { Route, Switch } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import LandingPage from '../components/pages/landingPage/LandingPage';
import SingleProduct from '../components/pages/singleProductPage/SingleProductPage';

const Routes = () => (
  <MainLayout>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/single-product/:productId' component={SingleProduct} />
    </Switch>
    <ReduxToastr />
  </MainLayout>
);

export default Routes;
