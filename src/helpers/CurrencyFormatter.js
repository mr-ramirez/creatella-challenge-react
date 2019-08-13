const CurrencyFormatter = {
  convertFromNumberToDollarString: function(amount: number): string {
    return `$${amount.toFixed(2)}`;
  },
};

Object.freeze(CurrencyFormatter);

export default CurrencyFormatter;
