import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Navbar from './index.jsx'

describe('Navbar component', () => {
  describe('WHEN flag about loading is on', () => {
    it('SHOULD render with progress bar', () => {
      const wrapper = shallow(<Navbar isLoading={true} />);

      expect(wrapper.find(Typography).children().text()).toEqual('Creatella React Challenge');
      expect(wrapper.find(LinearProgress)).toHaveLength(1);
    });
  });
  
  describe('WHEN flag about loading is off', () => {
    it('SHOULD render without progress bar', () => {
      const wrapper = shallow(<Navbar isLoading={false} />);

      expect(wrapper.find(Typography).children().text()).toEqual('Creatella React Challenge');
      expect(wrapper.find(LinearProgress)).toHaveLength(0);
    });
  });
});
