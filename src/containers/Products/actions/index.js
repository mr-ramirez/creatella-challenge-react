import { createAction } from 'redux-starter-kit';

export const requestProducts = createAction('REQUEST_PRODUCTS');
export const storeProducts = createAction('STORE_PRODUCTS');
export const displayErrorMessage = createAction('DISPLAY_ERROR_MESSAGE');
