import { createAction } from 'redux-starter-kit';

import ProductService from '../services/index.js';

import {
  IGetProductsRequest,
} from '../../../types.js';

export const requestProducts = createAction('REQUEST_PRODUCTS');
export const storeProducts = createAction('STORE_PRODUCTS');
export const displayErrorMessage = createAction('DISPLAY_ERROR_MESSAGE');
export const changeSorting = createAction('CHANGE_SORTING');

export const getProducts = (request: IGetProductsRequest): void => {
  return async (dispatch) => {
    dispatch(requestProducts({
      page: request.page,
      sort: request.sort,
    }));

    try {
      const products = await ProductService.getProducts(request);
      dispatch(storeProducts({ products }));
    } catch(error) {
      dispatch(displayErrorMessage({ errorMessage: error }));
    }
  };
};
