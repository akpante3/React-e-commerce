/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './MultiStep.scss';
// import 'font-awesome/css/font-awesome.min.css';


const MultiStepComponent = ({ step }) => {
  const steps = step + 1;
  return (
    <div>
      <div className='step-progress'>
        <div className="step-progress-checked step-progress-circle" />
        <div className={`step-progress-line ${steps >= 2 ? 'step-progress-checked' : 'step-progress-unchecked'}`} />
        <div className={`step-progress-circle ${steps >= 2 ? 'step-progress-checked' : 'step-progress-unchecked'}`} />
        <div className={`step-progress-line ${steps >= 3 ? 'step-progress-checked' : 'step-progress-unchecked'}`} />
        <div className={`step-progress-circle ${steps >= 3 ? 'step-progress-checked' : 'step-progress-unchecked'}`} />
        <div className={`step-progress-line ${steps >= 4 ? 'step-progress-checked' : 'step-progress-unchecked'}`} />
        <div className={`step-progress-circle ${steps >= 4 ? 'step-progress-checked' : 'step-progress-unchecked'}`} />
      </div>
      <div className='step-progress-text mt-3'>
        <div className='step-progress-checked-text'>
            Delivery
        </div>
        <div />
        <div className={steps >= 2 ? 'step-progress-checked-text' : 'step-progress-unchecked-text'}>
          Confirmation
        </div>
        <div />
        <div className={steps >= 3 ? 'step-progress-checked-text' : 'step-progress-unchecked-text'}>
          Payment
        </div>
        <div />
        <div className={`text-right ${steps >= 4 ? 'step-progress-checked-text' : 'step-progress-unchecked-text'}`}>
         Finish
        </div>
      </div>
    </div>

  );
};
export default MultiStepComponent;
