import React from 'react';
import { withRouter } from 'react-router-dom';
import AppButtonLarge from '../../ui/buttons/AppButton/AppButton';
import './404Page.scss';

const NotFoundPage = (props) => {
  const homeButton = () => {
    props.history.push('/');
  };
  const data = (
    <div className="text-center notFound-page">
      <h1>404</h1>
      <h2> Page Not Found</h2>
      <div className="mt-5 text-center"><AppButtonLarge title='back home' buttonClickHandler={homeButton} /></div>
    </div>
  );
  return data;
};
export default withRouter(NotFoundPage);
