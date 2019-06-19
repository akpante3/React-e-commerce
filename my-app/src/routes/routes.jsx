import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import { Route, Switch, Redirect } from 'react-router-dom';
import CheckoutPage from '../components/pages/checkoutPage/CheckoutPage';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import LandingPage from '../components/pages/landingPage/LandingPage';
import SingleProduct from '../components/pages/singleProductPage/SingleProductPage';
import NotFoundPage from '../components/pages/404Page/404Page';

const Routes = () => (
  <MainLayout>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact path='/single-product/:productId' component={SingleProduct} />
      <Route exact path='/404' component={NotFoundPage} />
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
    <ReduxToastr />
  </MainLayout>
);

export default Routes;
