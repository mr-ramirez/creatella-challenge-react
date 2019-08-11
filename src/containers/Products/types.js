// @flow

export interface IProductsState {
  isLoading: boolean,
  products: Array<IProductModel>,
  totalProducts: number,
}

export interface IProductModel {
  id: string,
  size: number,
  price: number,
  faces: any,
  date: any,
}
