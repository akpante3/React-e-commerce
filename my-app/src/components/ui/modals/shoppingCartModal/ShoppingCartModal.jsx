/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import PropsTypes from 'prop-types';
import './ShoppingCartModal.scss';
import AppButton from '../../buttons/AppButton/AppButton';


const MainLayout = ({ children, toggleCartModal, history }) => {
  const handleCartClick = () => {
    toggleCartModal();
  };

  const buttonClickHandler = (value) => {
    if (value === 'Back to shop') {
      history.push('/');
      toggleCartModal();
    } else {
      history.push('/checkout');
      toggleCartModal();
    }
  };

  return (
    <CSSTransition
      in
      appear
      timeout={2000}
      classNames="enter"
    >
      <Fragment>
        <div className="product-modal">
          <div className="product-modal-content">
            <div className="close-modal">
              <div
                className="text-right close-modal-icon"
                onClick={() => handleCartClick()}
              >
            &times;
              </div>
            </div>
            <div className="product-modal-children">
              {children}
            </div>
            <div className="row bottom-section">
              <div className="col">
                <AppButton
                  title='Back to shop'
                  value='Back to shop'
                  color='white'
                  buttonClickHandler={buttonClickHandler}
                />
              </div>
              <div className="checkout">
                <AppButton
                  title="checkout"
                  value="checkout"
                  buttonClickHandler={buttonClickHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <div />
      </Fragment>
    </CSSTransition>
  );
};

MainLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};

export default withRouter(MainLayout);
