import { ConvertToProductModel } from './mapper';
import { IProductModel } from '../../types';
import CurrencyFormatter from '../../helpers/CurrencyFormatter';
import DateFormatter from '../../helpers/DateFormatter';

jest.mock('../../helpers/CurrencyFormatter');
jest.mock('../../helpers/DateFormatter');

describe('Product Mapper', () => {
  const fakeUnmappedProduct: Object = {
    id: '10',
    size: 20,
    price: 150,
    face: '(- l -)',
    date: 'date',
  };

  describe('WHEN product date is valid', () => {
    beforeEach(() => {
      CurrencyFormatter.convertFromNumberToDollarString
        .mockImplementation(() => '$ 150.00');
    });

    describe('AND the difference from today is 1 day', () => {
      const expectedModel: IProductModel = {
        id: '10',
        size: '20px',
        price: '$ 150.00',
        face: '(- l -)',
        date: '1 day ago',
      };

      beforeEach(() => {
        DateFormatter.isDateValid.mockImplementation(() => true);

        DateFormatter.parseValueToDate
          .mockImplementation(() => new Date(2010,10,10));

        DateFormatter.now
          .mockImplementation(() => new Date());

        DateFormatter.getDifferenceInDays
          .mockImplementation(() => 1);
      });

      it('SHOULD return an object representing the product model', () => {
        const model = ConvertToProductModel(fakeUnmappedProduct);
        expect(model).toEqual(expectedModel);
      });
    });

    describe('AND the difference from today is 5 days', () => {
      const expectedModel: IProductModel = {
        id: '10',
        size: '20px',
        price: '$ 150.00',
        face: '(- l -)',
        date: '5 days ago',
      };

      beforeEach(() => {
        DateFormatter.isDateValid.mockImplementation(() => true);

        DateFormatter.parseValueToDate
          .mockImplementation(() => new Date(2010,10,10));

        DateFormatter.now
          .mockImplementation(() => new Date());

        DateFormatter.getDifferenceInDays
          .mockImplementation(() => 5);
      });

      it('SHOULD return an object representing the product model', () => {
        const model = ConvertToProductModel(fakeUnmappedProduct);
        expect(model).toEqual(expectedModel);
      });
    });

    describe('AND the difference from today is 8 days', () => {
      const expectedModel: IProductModel = {
        id: '10',
        size: '20px',
        price: '$ 150.00',
        face: '(- l -)',
        date: '08/05/2019',
      };

      beforeEach(() => {
        DateFormatter.isDateValid.mockImplementation(() => true);

        DateFormatter.parseValueToDate
          .mockImplementation(() => new Date(2010,10,10));

        DateFormatter.now
          .mockImplementation(() => new Date());

        DateFormatter.getDifferenceInDays
          .mockImplementation(() => 8);

        DateFormatter.formatDateAsMonthDayYear
          .mockImplementation(() => '08/05/2019');
      });

      it('SHOULD return an object representing the product model', () => {
        const model = ConvertToProductModel(fakeUnmappedProduct);
        expect(model).toEqual(expectedModel);
      });
    });
  });

  describe('WHEN product date is invalid', () => {
    const expectedModel: IProductModel = {
      id: '10',
      size: '20px',
      price: '$ 150.00',
      face: '(- l -)',
      date: '---',
    };

    beforeEach(() => {
      DateFormatter.isDateValid.mockImplementation(() => false);

      CurrencyFormatter.convertFromNumberToDollarString
        .mockImplementation(() => '$ 150.00');
    });

    it('SHOULD return an object representing the product model', () => {
      const model = ConvertToProductModel(fakeUnmappedProduct);
      expect(model).toEqual(expectedModel);
    });
  });
});
