import { createAction } from 'redux-starter-kit';

import AdService from '../services/AdService';

export const clearAd = createAction('CLEAR_AD');
export const displayAd = createAction('DISPLAY_AD');
export const hideAd = createAction('HIDE_AD');

export const loadNewAd = (randomNumber: number): void => {
  return async (dispatch) => {
    dispatch(clearAd());

    const ad = await AdService.getAd(randomNumber);
    dispatch(displayAd({
      ad: ad.base64Flag + ad.imageAsString,
      randomNumber,
    }));
  };
}
