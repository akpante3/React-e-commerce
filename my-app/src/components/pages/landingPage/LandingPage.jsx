import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { bindActionCreators } from 'redux';
import ModalImage from '../../ui/modals/modalImage/ModalImage';
import './LandingPage.scss';
import AppButton from '../../ui/buttons/AppButton/AppButton';
import ProductFilterCard from '../../ui/cards/productFilterCard/ProductFilterCard';
import ProductCard from '../../ui/cards/productCard/ProductCard';
import Pagination from '../../ui/pagination/Pagination';
import Spinner from '../../ui/Spinner/Spinner';


import {
  getAllProducts,
  getProductsByCatergory,
  getProductsByDepartment,
} from '../../../store/actions/getProducts';


class LandingPage extends Component {
  state = {

  };

  componentDidMount() {
    this.props.actions.getAllProducts(1);
  }

  paginateProduct = (page) => {
    if (this.props.products.productType === 'all-products') {
      this.props.actions.getAllProducts(page);
    }
    if (this.props.products.productType === 'department-products') {
      this.props.actions.getProductsByDepartment(page, this.props.products.id);
    }
    if (this.props.products.productType === 'category-products') {
      this.props.actions.getProductsByCatergory(page, this.props.products.id);
    }
  }

  render() {
    const { products } = this.props;
    return (products.products ? (
      <CSSTransition
        in
        appear
        timeout={3000}
        classNames="fade"
      >
        <div className="landing-page">
          <ModalImage
            image='https://raw.githubusercontent.com/zandoan/turing-uiux/master/Zeplin/Images/Images-modal4.png'
            details={(
              <div>
                <span>Mens wear</span>
                <div><AppButton title='shop' /></div>
              </div>
            )}
          />
          <div className="landing-page-content mt-5">
            <div className="landing-filter-card">
              <ProductFilterCard
                count={products.count}
              />
            </div>
            {
            products.products
              ? products.products.map(product => (
                <div
                  className="landing-page-product"
                  key={product.product_id}
                >
                  <ProductCard
                    product={product}
                  />
                </div>
              )) : null
          }
          </div>
          <div className="pagination text-center mt-5 mb-5">
            <Pagination
              count={products.count}
              paginateProduct={this.paginateProduct}
            />
          </div>
          <ModalImage
            image='https://www.playgroundshop.com/upload/comunicazioni_home/190402_GALLERY_DONNA_EN.gif'
          />
        </div>
      </CSSTransition>
    ) : <Spinner />
    );
  }
}


const mapStateToProps = state => ({
  categories: state.categories.categories,
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getAllProducts, getProductsByCatergory, getProductsByDepartment },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
