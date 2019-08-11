// @flow
import { IProductsState } from '../types';

import {
  requestProducts,
  storeProducts,
  displayErrorMessage,
} from '../actions'

const initialState: IProductsState = {
  isLoading: false,
  products: [],
  totalProducts: 0,
};

export const products = (state: IProductsState = initialState, action: Object): IProductsState => {
  switch (action.type) {
    case requestProducts.type:
      return {
        ...state,
        isLoading: true,
      };

    case storeProducts.type:
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
      };

    case displayErrorMessage.type:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorMessage,
      };
  
    default:
      return state;
  }
};
