// @flow
import { IProductsState } from '../../../types';

import SortTypes from '../sortTypes';

import {
  requestProducts,
  storeProducts,
  displayErrorMessage,
  changeSorting,
  nextPage,
  displayAd,
} from '../actions'

const initialState: IProductsState = {
  isLoading: false,
  products: [],
  sort: SortTypes.ID,
  pageSize: 10,
  page: 1,
  wasTheReached: false,
  ad: '',
  randomNumbersUsed: [],
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
        wasTheReached: action.payload.products.length === 0,
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
        wasTheReached: false,
      };

    case nextPage.type:
      return {
        ...state,
        page: state.page + 1,
      };

    case displayAd.type:
      return {
        ...state,
        ad: action.payload.ad,
        randomNumbersUsed: state.randomNumbersUsed.concat([
          action.payload.randomNunber,
        ]),
      };
  
    default:
      return state;
  }
};
