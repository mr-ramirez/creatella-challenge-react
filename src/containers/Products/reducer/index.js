// @flow
import { IProductsState } from '../../../types';

import SortTypes from '../sortTypes';

import {
  requestProducts,
  storeProducts,
  displayErrorMessage,
  changeSorting,
  nextPage,
  cacheProducts,
  storeCacheProducts,
} from '../actions'

const initialState: IProductsState = {
  isLoading: false,
  products: [],
  sort: SortTypes.ID,
  pageSize: 10,
  page: 1,
  wasTheEndOfResultsReached: false,
  temporalProducts: [],
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
        products: [...state.products, ...action.payload.products],
        wasTheEndOfResultsReached: action.payload.products.length === 0,
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
        wasTheEndOfResultsReached: false,
      };

    case nextPage.type:
      return {
        ...state,
        page: state.page + 1,
      };

    case cacheProducts.type:
      return {
        ...state,
        temporalProducts: action.payload.products,
      };

    case storeCacheProducts.type:
      return {
        ...state,
        temporalProducts: [],
        products: [ ...state.products, ...state.temporalProducts ],
        page: state.page + 1,
      };
  
    default:
      return state;
  }
};
