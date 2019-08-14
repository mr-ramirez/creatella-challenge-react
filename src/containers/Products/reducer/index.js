// @flow
import { IProductsState } from '../../../types';

import SortTypes from '../sortTypes';

import {
  requestProducts,
  storeProducts,
  displayErrorMessage,
  changeSorting,
} from '../actions'

const initialState: IProductsState = {
  isLoading: false,
  products: [],
  totalProducts: 0,
  sort: SortTypes.ID,
  pageSize: 20,
  page: 1,
};

export const products = (state: IProductsState = initialState, action: Object): IProductsState => {
  switch (action.type) {
    case requestProducts.type:
      return {
        ...state,
        isLoading: true,
        page: action.payload.page,
      };

    case storeProducts.type:
      return {
        ...state,
        isLoading: false,
        products: state.products.concat(action.payload.products),
      };

    case displayErrorMessage.type:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorMessage,
      };

    case changeSorting.type:
      return {
        ...state,
        page: 1,
        products: [],
        sort: action.payload.sort,
      };
  
    default:
      return state;
  }
};
