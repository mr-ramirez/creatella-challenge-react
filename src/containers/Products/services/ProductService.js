import fetch from 'node-fetch';

import { ConvertToProductModel } from '../mapper';

import {
  IGetProductsRequest,
} from '../../../types';

const ProductService = {
  getProducts(request: IGetProductsRequest) {
    const page = `_page=${request.page}`;
    const size = `_limit=${request.size}`;
    const sortBy = `_sort=${request.sort}`;
    const url = `http://localhost:3000/products?${page}&${size}&${sortBy}`;

    return fetch(url, { method: 'GET' })
      .then((response: Object) => response.json())
      .then((responseAsJson) => {
        return responseAsJson.map((item) => ConvertToProductModel(item));
      });
  },
};

Object.freeze(ProductService);

export default ProductService;
