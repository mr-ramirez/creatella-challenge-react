import CurrencyFormatter from './CurrencyFormatter';

describe('Currency Formatter', () => {
  describe('WHEN converting a number to dollar format', () => {
    it('SHOULD return a string', () => {
      const amount1 = 130.42;
      const amount2 = 9920430;
      const amount3 = 1111134522130.00393984;
      const amount4 = 5;
      const amount5 = 0.55;
      const amount6 = 0;

      const result1 = CurrencyFormatter.convertFromNumberToDollarString(amount1);
      const result2 = CurrencyFormatter.convertFromNumberToDollarString(amount2);
      const result3 = CurrencyFormatter.convertFromNumberToDollarString(amount3);
      const result4 = CurrencyFormatter.convertFromNumberToDollarString(amount4);
      const result5 = CurrencyFormatter.convertFromNumberToDollarString(amount5);
      const result6 = CurrencyFormatter.convertFromNumberToDollarString(amount6);

      expect(result1).toEqual('$ 130.42');
      expect(result2).toEqual('$ 9,920,430.00');
      expect(result3).toEqual('$ 1,111,134,522,130.00');
      expect(result4).toEqual('$ 5.00');
      expect(result5).toEqual('$ 0.55');
      expect(result6).toEqual('$ 0.00');
    });
  });
});
