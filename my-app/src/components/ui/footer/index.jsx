/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FooterLinks from './FooterLinks';
import FooterIcons from './FooterIcons';
// import 'font-awesome/css/font-awesome.min.css';
import './Footer.scss';


const Footer = () => (
  <div className="footer text-center">
    <FooterLinks />
    <FooterIcons />
    <p className="trade-mark mt-4">shopmate Ltd privacy policy market</p>
  </div>
);
export default Footer;
