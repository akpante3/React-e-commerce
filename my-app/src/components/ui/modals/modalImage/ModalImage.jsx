import React from 'react';
import './ModalImage.scss';

const ModalImage = (props) => {
  const {
    image,
    details,
  } = props;
  const data = (
    <div className="modal-image">
      <div className="modal-image-proterties">
        {details}
      </div>
      <img src={image} alt="Smiley face" />
    </div>
  );
  return data;
};

export default ModalImage;
