import React from 'react';
import { shallow } from 'enzyme';

import ProductTableHead from './ProductTableHead.jsx';
import SortTypes from '../sortTypes';

describe('ProductTableHead Component', () => {
  describe('WHEN ID is the active column', () => {
    it('SHOULD render with ID highlighted', () => {
      const wrapper = shallow(
        <ProductTableHead sort={SortTypes.ID} sortProducts={() => {}} />
      );

      expect(wrapper.find('#SortLabel_Id[active=true]')).toHaveLength(1);
      expect(wrapper.find('#SortLabel_Size[active=false]')).toHaveLength(1);
      expect(wrapper.find('#SortLabel_Price[active=false]')).toHaveLength(1);
    });
  });

  describe('WHEN SIZE is the active column', () => {
    it('SHOULD render with SIZE highlighted', () => {
      const wrapper = shallow(
        <ProductTableHead sort={SortTypes.SIZE} sortProducts={() => {}} />
      );

      expect(wrapper.find('#SortLabel_Id[active=false]')).toHaveLength(1);
      expect(wrapper.find('#SortLabel_Size[active=true]')).toHaveLength(1);
      expect(wrapper.find('#SortLabel_Price[active=false]')).toHaveLength(1);
    });
  });

  describe('WHEN PRICE is the active column', () => {
    it('SHOULD render with PRICE highlighted', () => {
      const wrapper = shallow(
        <ProductTableHead sort={SortTypes.PRICE} sortProducts={() => {}} />
      );

      expect(wrapper.find('#SortLabel_Id[active=false]')).toHaveLength(1);
      expect(wrapper.find('#SortLabel_Size[active=false]')).toHaveLength(1);
      expect(wrapper.find('#SortLabel_Price[active=true]')).toHaveLength(1);
    });
  });

  describe('WHEN clicking on column ID', () => {
    it('SHOULD invoke method of sorting products', () => {
      const mockMethod = jest.fn(() => true);

      const wrapper = shallow(
        <ProductTableHead sort={SortTypes.ID} sortProducts={mockMethod} />
      );

      wrapper.find('#SortLabel_Id').simulate('click');
      wrapper.find('#SortLabel_Size').simulate('click');
      wrapper.find('#SortLabel_Price').simulate('click');

      expect(mockMethod).toHaveBeenCalledTimes(3);
    });
  });
});
