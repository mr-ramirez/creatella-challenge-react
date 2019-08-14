import {
  requestProducts,
  storeProducts,
  displayErrorMessage,
  changeSorting,
  getProducts,
} from './';

import ProductService from '../services/index';

import { IGetProductsRequest, IProductModel } from '../../../types';

jest.mock('../services/index');

describe('Products Actions', () => {
  describe('WHEN creating action for requesting of products', () => {
    const expectedActionType = 'REQUEST_PRODUCTS';
    
    const fakePayload = {
      page: 1,
    };

    it('SHOULD return an object with type', () => {
      const actualActionObject = requestProducts(fakePayload);

      expect(actualActionObject.type).toEqual(expectedActionType);
      expect(actualActionObject.payload).toEqual(fakePayload);
    });
  });

  describe('WHEN creating action for storing products', () => {
    const expectedActionType = 'STORE_PRODUCTS';

    const fakePayload = {
      products: [{
        id: 1,
      }],
    };

    it('SHOULD return an object with type', () => {
      const actualActionObject = storeProducts(fakePayload);

      expect(actualActionObject.type).toEqual(expectedActionType);
      expect(actualActionObject.payload).toEqual(fakePayload);
    });
  });

  describe('WHEN creating action for displaying an error message', () => {
    const expectedActionType = 'DISPLAY_ERROR_MESSAGE';
    
    const fakePayload = {
      errorMessage: 'Something went wrong',
    };

    it('SHOULD return an object with type', () => {
      const actualActionObject = displayErrorMessage(fakePayload);

      expect(actualActionObject.type).toEqual(expectedActionType);
      expect(actualActionObject.payload).toEqual(fakePayload);
    });
  });

  describe('WHEN creating action for changing the sort method', () => {
    const expectedActionType = 'CHANGE_SORTING';
    
    const fakePayload = {
      sort: 'something',
    };

    it('SHOULD return an object with type', () => {
      const actualActionObject = changeSorting(fakePayload);

      expect(actualActionObject.type).toEqual(expectedActionType);
      expect(actualActionObject.payload).toEqual(fakePayload);
    });
  });

  describe('WHEN creating a sequence of actions to get products from api', () => {
    describe('AND an error occurs', () => {
      const mockDispatch = jest.fn(() => true);

      const fakeError: string = 'Something wrong happened';

      const fakeRequest: IGetProductsRequest = {
        page: 1,
        size: 10,
        sort: 'sort',
      };

      beforeEach(() => {
        // eslint-disable-next-line no-undef
        ProductService.getProducts.mockImplementation(() => Promise.reject(fakeError));
      });

      it('SHOULD dispatch an action to save error message', async () => {
        const dispatcher = getProducts(fakeRequest);

        await dispatcher(mockDispatch);

        expect(mockDispatch.mock.calls[0][0].type).toEqual('REQUEST_PRODUCTS');
        expect(mockDispatch.mock.calls[1][0].type).toEqual('DISPLAY_ERROR_MESSAGE');
        expect(mockDispatch).toHaveBeenCalledTimes(2);
      });
    });

    describe('AND a successful response is received', () => {
      const mockDispatch = jest.fn(() => true);
      
      const fakeResponse: Array<IProductModel> = [{
        id: 1,
      }];

      const fakeRequest: IGetProductsRequest = {
        page: 1,
        size: 10,
        sort: 'sort',
      };

      beforeEach(() => {
        // eslint-disable-next-line no-undef
        ProductService.getProducts.mockImplementation(() => Promise.resolve(fakeResponse));
      });

      it('SHOULD dispatch an action to save error message', async () => {
        const dispatcher = getProducts(fakeRequest);
        await dispatcher(mockDispatch);
        
        expect(mockDispatch.mock.calls[0][0].type).toEqual('REQUEST_PRODUCTS');
        expect(mockDispatch.mock.calls[1][0].type).toEqual('STORE_PRODUCTS');
        expect(mockDispatch).toHaveBeenCalledTimes(2);
      });
    });
  });
});
