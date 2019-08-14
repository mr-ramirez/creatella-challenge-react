import { products } from './'

describe('Products Reducer', () => {
  const initialState = {
    isLoading: false,
    products: [],
    totalProducts: 0,
  };

  describe('WHEN action is for requesting products', () => {
    const fakeAction  = {
      type: 'REQUEST_PRODUCTS',
      payload: {
        page: 2,
      },
    };

    const expectedState = {
      ...initialState,
      isLoading: true,
      page: 2,
    };

    it('SHOULD return updated state', () => {
      const actualState = products(initialState, fakeAction);
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('WHEN action is for storing of products', () => {
    const fakeAction  = {
      type: 'STORE_PRODUCTS',
      payload: {
        products: [{
          id: 1,
        }],
      },
    };

    const expectedState = {
      ...initialState,
      products: fakeAction.payload.products,
    };

    it('SHOULD return updated state', () => {
      const actualState = products(initialState, fakeAction);
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('WHEN action is for displaying an error message', () => {
    const fakeAction  = {
      type: 'DISPLAY_ERROR_MESSAGE',
      payload: {
        errorMessage: 'Something went wrong',
      },
    };

    const expectedState = {
      ...initialState,
      errorMessage: fakeAction.payload.errorMessage,
    };

    it('SHOULD return updated state', () => {
      const actualState = products(initialState, fakeAction);
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('WHEN action is for changing the sort method', () => {
    const fakeAction  = {
      type: 'CHANGE_SORTING',
      payload: {
        sort: 'Something',
      },
    };

    const expectedState = {
      ...initialState,
      page: 1,
      sort: fakeAction.payload.sort,
    };

    it('SHOULD return updated state', () => {
      const actualState = products(initialState, fakeAction);
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('WHEN action is unknown', () => {
    const fakeAction  = {
      type: 'UNKNOWN-ACTION',
    };

    it('SHOULD return same state', () => {
      const actualState = products(initialState, fakeAction);
      expect(actualState).toEqual(initialState);
    });
  });
});
