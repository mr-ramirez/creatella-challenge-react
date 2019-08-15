import { app } from './';

describe('App Reducer', () => {
  const initialState = {
    ad: '',
    randomNumbersUsed: [],
    isAdHidden: true,
  };

  describe('WHEN action is for displaying ad', () => {
    const fakeAction  = {
      type: 'DISPLAY_AD',
      payload: {
        ad: 'add info',
        randomNumber: 10,
      },
    };

    const expectedState = {
      ad: 'add info',
      randomNumbersUsed: [10],
      isAdHidden: false,
    };

    it('SHOULD return updated state', () => {
      const actualState = app(initialState, fakeAction);
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('WHEN action is for hiding ad', () => {
    const fakeAction  = {
      type: 'HIDE_AD',
    };

    const expectedState = {
      ...initialState,
      isAdHidden: true,
    };

    it('SHOULD return updated state', () => {
      const actualState = app(initialState, fakeAction);
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('WHEN action is for clearing ad', () => {
    const fakeAction  = {
      type: 'CLEAR_AD',
    };

    const expectedState = {
      ...initialState,
      ad: '',
    };

    it('SHOULD return updated state', () => {
      const actualState = app(initialState, fakeAction);
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('WHEN action is unknown', () => {
    const fakeAction  = {
      type: 'UNKNOWN-ACTION',
    };

    it('SHOULD return same state', () => {
      const actualState = app(initialState, fakeAction);
      expect(actualState).toEqual(initialState);
    });
  });
});
