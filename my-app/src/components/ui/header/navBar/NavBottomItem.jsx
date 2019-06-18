/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import ShoppingBag from '../../shoppingBag/ShoppingBag';
import { getCategories } from '../../../../store/actions/GetCategories';
import { getProductsByDepartment, searchProduct } from '../../../../store/actions/GetProducts';


/**
 * [NavBottomItems]: this class contains the item for the bottom section of the nav
 */
const NavBottomItems = (props) => {
  const handleNavLinkClick = (payload) => {
    props.actions.getCategories(payload);
    props.actions.getProductsByDepartment(1, payload);
  };

  const handleLogoClick = () => props.history.push('/');
  const searchIconPlaceholder = (<FontAwesomeIcon icon={faSearch} />);

  const searchProducts = (e) => {
    if (e.key === 'Enter') {
      props.actions.searchProduct(1, e.target.value);
    }
  };

  const handleCartClick = () => {
    props.toggleCartModal();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="nav-bar-logo" onClick={() => handleLogoClick()}>SHOPMATE</div>
      <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto nav-links">
          {
        props.departments.length > 0 && props.location.pathname === '/'
          ? props.departments.map(link => (<li className="nav-item" key={link.department_id}><span onClick={() => handleNavLinkClick(link.department_id)} className="nav-bottom-link">{link.name}</span></li>))
          : null
       }
        </ul>
        { props.location.pathname === '/'
          ? (
            <div className="search-bar mr-5">
              <span className="search-icon">{searchIconPlaceholder}</span>
              <input onKeyPress={searchProducts} className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </div>
          ) : null
        }

        <ShoppingBag
          position='bottom'
          handleCartClick={handleCartClick}
        />
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  departments: state.departments.departments,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getCategories, getProductsByDepartment, searchProduct },
    dispatch,
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBottomItems));
