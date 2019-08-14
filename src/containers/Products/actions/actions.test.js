import {
  requestProducts,
  storeProducts,
  displayErrorMessage,
} from './'

describe('Products Actions', () => {
  describe('WHEN creating action for requesting of products', () => {
    const expectedActionType = 'REQUEST_PRODUCTS';

    it('SHOULD return an object with type', () => {
      const actualActionObject = requestProducts();

      expect(actualActionObject.type).toEqual(expectedActionType);
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
});
