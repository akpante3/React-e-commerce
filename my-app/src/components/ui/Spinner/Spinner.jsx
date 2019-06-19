import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Spinner.scss';

const Spinner = () => {
  const data = (
    <div className="spinner-wrapper">
      <div className="spinner">
        <FontAwesomeIcon icon={faSpinner} size="4x" spin />
      </div>
    </div>
  );
  return data;
};
export default Spinner;
