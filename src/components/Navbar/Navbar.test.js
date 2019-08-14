import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import Navbar from './index.jsx'

describe('Navbar component', () => {
  it('SHOULD render', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Typography).children().text()).toEqual('Creatella React Challenge');
  });
});
