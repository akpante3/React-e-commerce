import React from 'react';
import './AppButton.scss';


const AppButton = ({
  title, color, buttonClickHandler, value,
}) => {
  const onClickHandler = () => {
    if (buttonClickHandler) {
      buttonClickHandler(value);
    }
  };

  const data = (
    <button
      type="button"
      className={`app-button app-button-md ${color === 'white' ? 'white-button' : 'pink-button'}`}
      onClick={() => onClickHandler()}
    >
      {title}
    </button>
  );
  return data;
};

export default AppButton;
