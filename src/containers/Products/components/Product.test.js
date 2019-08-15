import React from 'react';
import { shallow } from 'enzyme';
import { Products } from './index';
import ProductTableBody from './ProductTableBody';
import ProductTableHead from './ProductTableHead';

describe('Products Component', () => {
  const initialProps: Object = {
    isLoading: false,
    products: [{
      id: 1,
    }],
    page: 1,
    pageSize: 10,
    sort: 'sort',
    wasTheEndOfResultsReached: false,
    randomNumbersUsed: [],
    actions: {
      getProducts: () => {},
      loadNewAd: () => {},
    },
  };

  describe('WHEN mounting', () => {
    const mockGetProducts = jest.fn();

    it('SHOULD retrieve products', () => {
      const fakeProps = {
        ...initialProps,
        actions: {
          getProducts: mockGetProducts,
        },
      };

      const wrapper = shallow(<Products { ...fakeProps } />);

      expect(wrapper.find(ProductTableHead)).toHaveLength(1);
      expect(wrapper.find(ProductTableBody)).toHaveLength(1);

      expect(mockGetProducts).toHaveBeenCalledTimes(1);
    });
  });

  describe('WHEN updating page to 2', () => {
    it('SHOULD retrieve new products and load a new ad', () => {
      const mockGetProducts = jest.fn();
      const mockLoadAd= jest.fn();

      const fakeProps = {
        ...initialProps,
        actions: {
          getProducts: mockGetProducts,
          loadNewAd: mockLoadAd,
        },
      };

      const wrapper = shallow(<Products { ...fakeProps } />);

      wrapper.setProps({ page: 2 });

      expect(mockGetProducts).toHaveBeenCalledTimes(2);
      expect(mockLoadAd).toHaveBeenCalledTimes(1);
    });
  });
});
