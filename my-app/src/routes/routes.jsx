import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import { Route, Switch, Redirect } from 'react-router-dom';
import CheckoutPage from '../components/pages/checkoutPage/CheckoutPage';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import LandingPage from '../components/pages/landingPage/LandingPage';
import SingleProduct from '../components/pages/singleProductPage/SingleProductPage';

const Routes = () => (
  <MainLayout>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact path='/single-product/:productId' component={SingleProduct} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
    <ReduxToastr />
  </MainLayout>
);

export default Routes;
