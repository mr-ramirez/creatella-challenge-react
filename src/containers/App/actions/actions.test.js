import {
  clearAd,
  displayAd,
  hideAd,
  loadNewAd,
} from './index';

import AdService from '../services/AdService';

jest.mock('../services/AdService');

describe('App Actions', () => {
  describe('WHEN creating action to clear add', () => {
    const expectedActionType = 'CLEAR_AD';

    it('SHOULD return an object with type', () => {
      const actualActionObject = clearAd();

      expect(actualActionObject.type).toEqual(expectedActionType);
    });
  });

  describe('WHEN creating action to display add', () => {
    const expectedActionType = 'DISPLAY_AD';

    const fakePayload = {
      ad: 'something',
      randomNumber: 9,
    };

    it('SHOULD return an object with type', () => {
      const actualActionObject = displayAd(fakePayload);

      expect(actualActionObject.type).toEqual(expectedActionType);
      expect(actualActionObject.payload).toEqual(fakePayload);
    });
  });

  describe('WHEN creating action to hide add', () => {
    const expectedActionType = 'HIDE_AD';

    it('SHOULD return an object with type', () => {
      const actualActionObject = hideAd();

      expect(actualActionObject.type).toEqual(expectedActionType);
    });
  });

  describe('WHEN creating a sequence of actions to get ad from api', () => {
    const mockDispatch = jest.fn(() => true);

    const fakeRandomAd = 1000;
    
    const fakeResponse: Object = {
      base64Flag: 'base',
      imageAsString: 'image',
    };

    beforeEach(() => {
      // eslint-disable-next-line no-undef
      AdService.getAd.mockImplementation(() => Promise.resolve(fakeResponse));
    });

    it('SHOULD dispatch an action to save error message', async () => {
      const dispatcher = loadNewAd(fakeRandomAd);
      await dispatcher(mockDispatch);
      
      expect(mockDispatch.mock.calls[0][0].type).toEqual('CLEAR_AD');
      expect(mockDispatch.mock.calls[1][0].type).toEqual('DISPLAY_AD');
      expect(mockDispatch).toHaveBeenCalledTimes(2);
    });
  });
});
