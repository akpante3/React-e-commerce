/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'font-awesome/css/font-awesome.min.css';
import './Footer.scss';

const FooterSocialIcons = () => {
  const data = (
    <div className="footer-icons">
      <span><FontAwesomeIcon icon={['fab', 'facebook']} /></span>
      <span><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
      <span><FontAwesomeIcon icon={['fab', 'pinterest']} /></span>
      <span><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
    </div>
  );
  return data;
};
export default FooterSocialIcons;
