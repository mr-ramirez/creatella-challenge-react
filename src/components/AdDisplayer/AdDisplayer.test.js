import React from 'react';
import { shallow } from 'enzyme';
import { IconButton, Typography } from '@material-ui/core';

import AdDisplayer from './index';

describe('AdDisplayer component', () => {
  it('SHOULD render', () => {
    const image = 'some random image as string';
    const fakeFunction = () => {};

    const wrapper = shallow(<AdDisplayer image={image} hideAd={fakeFunction} />);

    expect(wrapper.find(Typography).children().text()).toEqual('Ad info will be place here');
  });

  describe('WHEN clicking on the icon to close ad', () => {
    const image = 'some random image as string';
    const mockMethod = jest.fn(() => true);

    it('SHOULD invoke method to do so', () => {
      const wrapper = shallow(<AdDisplayer image={image} hideAd={mockMethod} />);
      wrapper.find(IconButton).simulate('click');

      expect(mockMethod).toHaveBeenCalledTimes(1);
    });
  });
});
