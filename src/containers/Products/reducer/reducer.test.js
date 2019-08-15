import { products } from './';
import SortTypes from '../sortTypes';

describe('Products Reducer', () => {
  const initialState = {
    isLoading: false,
    products: [],
    sort: SortTypes.ID,
    pageSize: 10,
    page: 1,
    wasTheEndOfResultsReached: false,
    ad: '',
    randomNumbersUsed: [],
    isAdHidden: true,
    temporalProducts: [],
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
      wasTheEndOfResultsReached: false,
    };

    it('SHOULD return updated state', () => {
      const actualState = products(initialState, fakeAction);
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('WHEN action is for changing the sort method', () => {
    const fakeAction  = {
      type: 'NEXT_PAGE',
    };

    const expectedState = {
      ...initialState,
      page: 2,
    };

    it('SHOULD return updated state', () => {
      const actualState = products(initialState, fakeAction);
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('WHEN action is for caching products', () => {
    const fakeAction  = {
      type: 'CACHE_PRODUCTS',
      payload: {
        products: [{
          id: 1,
        }],
      },
    };

    const expectedState = {
      ...initialState,
      temporalProducts: fakeAction.payload.products,
    };

    it('SHOULD return updated state', () => {
      const actualState = products(initialState, fakeAction);
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('WHEN action is for storing cache products', () => {
    const fakeAction  = {
      type: 'STORE_CACHE_PRODUCTS',
    };

    const fakeState = {
      ...initialState,
      temporalProducts: [{
        id: 1,
      }],
    };

    const expectedState = {
      ...initialState,
      products: fakeState.temporalProducts,
      temporalProducts: [],
      page: 2,
    };

    it('SHOULD return updated state', () => {
      const actualState = products(fakeState, fakeAction);
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
