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
    temporalProducts: [],
    actions: {
      getProducts: () => {},
      loadNewAd: () => {},
      lazilyGetProducts: () => {},
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

  describe('WHEN retrieving products lazily', () => {
    it('SHOULD invoke an action', () => {
      const mockGetProducts= jest.fn();

      const fakeProps = {
        ...initialProps,
        actions: {
          getProducts: () => {},
          lazilyGetProducts: mockGetProducts,
        },
      };
      
      const wrapper = shallow(<Products { ...fakeProps } />);
      const instance = wrapper.instance();
      instance.retrieveProductsLazily();

      expect(mockGetProducts).toHaveBeenCalledTimes(1);
    });
  });

  describe('WHEN sorting products list', () => {
    it('SHOULD invoke an actions', () => {
      const mockChangeSorting= jest.fn();

      const fakeProps = {
        ...initialProps,
        actions: {
          getProducts: () => {},
          changeSorting: mockChangeSorting,
        },
      };

      const wrapper = shallow(<Products { ...fakeProps } />);
      const instance = wrapper.instance();
      instance.sortProducts('new-sort');

      expect(mockChangeSorting).toHaveBeenCalledTimes(1);
    });
  });

  describe('WHEN retrieving products', () => {
    describe('AND temporal products is not empty', () => {
      it('SHOULD invoke an action', () => {
        const mockStoreCacheProducts= jest.fn();

        const fakeProps = {
          ...initialProps,
          temporalProducts: [{
            id: 1,
          }],
          actions: {
            getProducts: () => {},
            storeCacheProducts: mockStoreCacheProducts,
          },
        };

        const wrapper = shallow(<Products { ...fakeProps } />);
        const instance = wrapper.instance();
        instance.retrieveProducts();

        expect(mockStoreCacheProducts).toHaveBeenCalledTimes(2);
      });
    });

    describe('AND temporal products is empty', () => {
      it('SHOULD invoke an action', () => {
        const mockGetProducts= jest.fn();

        const fakeProps = {
          ...initialProps,
          actions: {
            getProducts: mockGetProducts,
          },
        };

        const wrapper = shallow(<Products { ...fakeProps } />);
        const instance = wrapper.instance();
        instance.retrieveProducts();

        expect(mockGetProducts).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('WHEN executing idle event', () => {
    it('SHOULD invoke an action', () => {
      const mockLazilyGetProducts= jest.fn();

      const fakeProps = {
        ...initialProps,
        actions: {
          getProducts: () => {},
          lazilyGetProducts: mockLazilyGetProducts,
        },
      };

      const wrapper = shallow(<Products { ...fakeProps } />);
      const instance = wrapper.instance();
      instance.onIdle();

      expect(mockLazilyGetProducts).toHaveBeenCalledTimes(1);
    });
  });
});
