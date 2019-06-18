/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategories } from '../../../store/actions/GetCategories';
import { getProductsByDepartment } from '../../../store/actions/GetProducts';

import './Footer.scss';

const FooterLinks = (props) => {
  const handleNavLinkClick = (payload) => {
    props.actions.getCategories(payload);
    props.actions.getProductsByDepartment(1, payload);
  };

  const data = (
    <div className="footer-links">
      {
       props.departments.length > 0
         ? props.departments.map(link => (
           <span
             onKeyDown={handleNavLinkClick}
             key={link.department_id}
             onClick={() => handleNavLinkClick(link.department_id)}
             className="nav-bottom-link"
           >
             {link.name}
           </span>
         ))
         : null
       }
    </div>
  );
  return data;
};

const mapStateToProps = state => ({
  departments: state.departments.departments,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getCategories, getProductsByDepartment },
    dispatch,
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(FooterLinks);
