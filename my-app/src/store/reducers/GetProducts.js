import ACTIONS from '../actions/actionType';

const initialState = {
  id: '',
  productType: '',
  count: '',
  products: [],
  singleProduct: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        productType: 'all-products',
        products: [...action.payload.rows],
        count: action.payload.count,
      };

    case ACTIONS.GET_DEPARTMENTS_PRODUCTS:
      return {
        ...state,
        id: action.payload.id,
        productType: 'department-products',
        products: [...action.payload.rows],
        count: action.payload.count,
      };

    case ACTIONS.GET_CATEGORY_PRODUCTS:
      return {
        ...state,
        id: action.payload.id,
        productType: 'category-products',
        products: [...action.payload.rows],
        count: action.payload.count,
      };

    case ACTIONS.GET_A_PRODUCTS:
      return {
        ...state,
        id: action.payload.id,
        productType: 'single-product',
        singleProduct: action.payload,
      };

    case ACTIONS.SEARCH_PRODUCT:
      return {
        productType: 'search-product',
        products: [...action.payload.rows],
      };
    default:
      return state;
  }
};
