const CurrencyFormatter = {
  convertFromNumberToDollarString: function(amount: number): string {
    if (amount <= 0)
      return '$ 0.00';

    const [
      integer: string,
      decimal: string,
    ] = amount.toFixed(2).split('.');

    const [
      ,
      head: string,
      body: string,
    ] = /(\d{1,3})((?:\d{3})*)$/.exec(integer);

    const bodyInArray: Array<string> = body.match(/\d\d\d/g) || [];
    bodyInArray.unshift(head);

    return `$ ${bodyInArray.join(',')}.${decimal}`;
  },
};

Object.freeze(CurrencyFormatter);

export default CurrencyFormatter;
