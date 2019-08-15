import fetch from 'node-fetch';

import { IGetProductsRequest, IProductModel } from '../../../types';
import ProductService from './ProductService';
import * as Mapper from '../mapper';

jest.mock('../mapper');
jest.mock('node-fetch');

describe('Product Service', () => {
  const fakeProduct = { id: 1 };

  const request: IGetProductsRequest = {
    page: 1,
    size: 10,
    sort: 'sort',
  };

  const fakeUnmappedProducts: Array = [{
    id: 1,
  }];

  const fakeResponse = {
    json() {
      // eslint-disable-next-line no-undef
      return Promise.resolve(fakeUnmappedProducts);
    },
  };

  beforeEach(() => {
    // eslint-disable-next-line no-undef
    fetch.mockImplementation(() => Promise.resolve(fakeResponse));
    
    Mapper.ConvertToProductModel.mockImplementation(() => fakeProduct);
  });

  it('SHOULD return response', async () => {
    const response: Array<IProductModel> = await ProductService.getProducts(request);

    expect(response).toEqual([ fakeProduct ]);
  });
});
