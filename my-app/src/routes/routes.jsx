import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import LandingPage from '../components/pages/landingPage/LandingPage';

const Routes = () => (
  <MainLayout>
    <Switch>
      <Route exact path='/' component={LandingPage} />
    </Switch>
  </MainLayout>
);

export default Routes;
