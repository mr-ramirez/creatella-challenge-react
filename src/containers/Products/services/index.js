import fetch from 'node-fetch';

import { ConvertToProductModel } from '../mapper';

import {
  IGetProductsRequest,
} from '../types.js';

const ProductService = {
  getProducts(request: IGetProductsRequest) {
    const url = `http://localhost:3000/products?_page=${request.page}&_limit=${request.size}`;

    return fetch(url, { method: 'GET' })
      .then((response: any) => response.json())
      .then((responseAsJson) => {
        return responseAsJson.map((item) => ConvertToProductModel(item));
      });
  },
};

Object.freeze(ProductService);

export default ProductService;
