/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ShoppingBag from '../../shoppingBag/ShoppingBag';
import { getCategories } from '../../../../store/actions/GetCategories';
import { getProductsByDepartment } from '../../../../store/actions/GetProducts';

/**
 * [NavBottomItems]: this class contains the item for the bottom section of the nav
 */
const NavBottomItems = (props) => {
  const handleNavLinkClick = (payload) => {
    props.actions.getCategories(payload);
    props.actions.getProductsByDepartment(1, payload);
  };

  const searchIconPlaceholder = (<FontAwesomeIcon icon={faSearch} />);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="nav-bar-logo">SHOPMATE</div>
      <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto nav-links">
          {
        props.departments.length > 0
          ? props.departments.map(link => (<li className="nav-item"><span key={link.department_id} onClick={() => handleNavLinkClick(link.department_id)} className="nav-bottom-link">{link.name}</span></li>))
          : null
       }
        </ul>
        <div className="search-bar mr-5">
          <span className="search-icon">{searchIconPlaceholder}</span>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
        </div>
        <ShoppingBag position='bottom' />
      </div>
    </nav>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(NavBottomItems);
