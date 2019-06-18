import React from 'react';
import { withRouter } from 'react-router-dom';
import AppButtonLarge from '../../buttons/AppButton/AppButtonLarge';


const SuccessPage = (props) => {
  const homeButton = () => {
    props.history.push('/');
  };
  const data = (
    <div className="text-center">
      <h5>Your Transaction was successful</h5>
      <div className="mt-5 text-center"><AppButtonLarge title='back home' buttonClickHandler={homeButton} /></div>
    </div>
  );
  return data;
};
export default withRouter(SuccessPage);
