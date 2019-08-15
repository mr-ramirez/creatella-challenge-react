import React from 'react';
import { shallow } from 'enzyme';
import { App } from './index.jsx';
import AdDisplayer from '../../../components/AdDisplayer/index.jsx';

describe('App Container', () => {
  const props = {
    isLoading: false,
    ad: '',
    isAdHidden: false,
    actions: {
      hideAd: () => {},
    },
  };
  
  describe('WHEN ad is empty and hidden', () => {
    it('SHOULD not display the ad displayer', () => {
      const newProps = { ...props, isAdHidden: true };
      const wrapper = shallow(<App { ...newProps } />);
      
      expect(wrapper.find(AdDisplayer)).toHaveLength(0);
    });
  });

  describe('WHEN ad is not empty nor is hidden', () => {
    it('SHOULD not display the ad displayer', () => {
      const newProps = { ...props, ad: 'something' };
      const wrapper = shallow(<App { ...newProps } />);
      
      expect(wrapper.find(AdDisplayer)).toHaveLength(1);
    });
  });
});
