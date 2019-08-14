// @flow

export interface IProductsState {
  isLoading: boolean,
  products: Array<IProductModel>,
  totalProducts: number,
}

export interface IProductModel {
  id: string,
  size: string,
  price: string,
  faces: string,
  date: string,
}

export interface IProductsService {
  getProducts(): Array<IProductModel>;
}

export interface IGetProductsRequest {
  page: number,
  size: number;
}
