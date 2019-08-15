import { createAction } from 'redux-starter-kit';

import { IGetProductsRequest } from '../../../types.js';
import ProductService from '../services/ProductService';
import AdService from '../services/AdService';

export const requestProducts = createAction('REQUEST_PRODUCTS');
export const storeProducts = createAction('STORE_PRODUCTS');
export const displayErrorMessage = createAction('DISPLAY_ERROR_MESSAGE');
export const changeSorting = createAction('CHANGE_SORTING');
export const nextPage = createAction('NEXT_PAGE');
export const displayAd = createAction('DISPLAY_AD');

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

export const loadNewAd = (randomNumber: number): void => {
  return async (dispatch) => {
    try {
      const ad = await AdService.getAd(randomNumber);
      dispatch(displayAd({ ad }));
    } catch(error) {
      dispatch(displayErrorMessage({ errorMessage: error }));
    }
  };
}
