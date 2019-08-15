import { IAppState } from '../../../types';

import {
  clearAd,
  displayAd,
  hideAd,
} from '../actions/index';

const intialState: IAppState = {
  ad: '',
  randomNumbersUsed: [],
  isAdHidden: true,
}

export const app = (state: IAppState = intialState, action: Object): IAppState => {
  switch (action.type) {
    case displayAd.type:
      return {
        ...state,
        ad: action.payload.ad,
        isAdHidden: false,
        randomNumbersUsed: [...state.randomNumbersUsed, action.payload.randomNumber],
      };

    case hideAd.type:
      return {
        ...state,
        isAdHidden: true,
      };

    case clearAd.type:
      return {
        ...state,
        ad: '',
      };
  
    default:
      return state;
  }
}
