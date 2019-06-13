/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductFilterColors from '../../colorsPick/ColorsPick/ColorsPick';
import ProductSizes from '../../productSizes/ProductSizes';
import PriceRange from '../../priceRange/PriceRange';
import './ProductFilterCard.scss';
import Appbutton from '../../buttons/AppButton/AppButton';
import { getProductsByCatergory, getAllProducts } from '../../../../store/actions/GetProducts';

/** [productFilter]: contains content of filter card being diplayed on the landing page
 * state[categoryId]: id used to fetch category
  */
class productFilter extends Component {
  state = {
    categoryId: '',
    selectedCategory: 'All products',
  }

  onHandleCheck = (e) => {
    this.setState({
      categoryId: e.target.value,
    });
  }

  applyFilterInfo = () => {
    this.props.actions.getProductsByCatergory(1, this.state.categoryId);
    const categoryDetails = this.props.categories.find(
      category => category.category_id == this.state.categoryId,
    );
    this.setState({ selectedCategory: categoryDetails.name });
  }


  render() {
    const { categories, count } = this.props;
    const { selectedCategory } = this.state;

    return (
      <div className="product-filter-card">
        <div className="filter-card-header filter-card">
          <span>
            Filtered
            {' '}
            {count}
            {' '}
            items
          </span>
          <div className='mt-3'>
            <p>
              &times; Gender:
              {' '}
              <span>men</span>
            </p>
            <p>
              &times; Catergory:
              {' '}
              <span>{selectedCategory}</span>
            </p>
          </div>
        </div>
        <div className="filter-card-body mb-1 ">
          <span>Color</span>
          <br />
          <ProductFilterColors />
          <br />
          <span>Size</span>
          <br />
          <ProductSizes />
          <br />
          <span>Price range</span>
          <br />
          <br />
          <PriceRange />
          <br />
          <br />
          <span>Brand</span>
          <br />
          <div>
            {
              categories.length > 0
                ? categories.map(category => (
                  <div className="filter-cartegories">
                    <input type="radio" name="gender" value={category.category_id} onChange={this.onHandleCheck} />
                    <span className="category-link" key={category.category_id}>{category.name}</span>
                  </div>
                ))
                : null
            }
          </div>
        </div>
        <div className="filter-card-bottom col-md-12 mt-1 filter-card">
          <span className=" col">
            <Appbutton
              title='Apply'
              value='submit cartegories'
              buttonClickHandler={this.applyFilterInfo}
            />
          </span>
          <span className="ml-2 col clear-button">&times; Clear</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getProductsByCatergory, getAllProducts },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(productFilter);
