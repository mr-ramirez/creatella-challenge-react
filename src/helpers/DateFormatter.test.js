import DateFormatter from './DateFormatter';

describe('Date Formatter', () => {
  describe('WHEN getting the difference in days between two dates', () => {
    it('SHOULD return the right number of days', () => {
      const from1 = new Date(2019, 1, 5);
      const to1 = new Date(2019, 1, 7);
      const result1 = DateFormatter.getDifferenceInDays(from1, to1);
      expect(result1).toEqual(2);

      const from2 = new Date(2019, 1, 5);
      const to2 = new Date(2019, 1, 5);
      const result2 = DateFormatter.getDifferenceInDays(from2, to2);
      expect(result2).toEqual(0);

      const from3 = new Date(2019, 1, 5);
      const to3 = new Date(2019, 1, 30);
      const result3 = DateFormatter.getDifferenceInDays(from3, to3);
      expect(result3).toEqual(25);
    });
  });

  describe('WHEN getting the day of today', () => {
    it('SHOULD not return undefined', () => {
      expect(DateFormatter.now()).toBeDefined();
    });
  });

  describe('WHEN parsing string to date', () => {
    it('SHOULD not return undefined', () => {
      expect(DateFormatter.parseValueToDate('05/05/2019')).toBeDefined();
    });
  });

  describe('WHEN formatting a date', () => {
    it('SHOULD return a date as string in format MM/DD/YY', () => {
      const date1 = new Date(2019, 5, 5);
      const result1 = DateFormatter.formatDateAsMonthDayYear(date1);
      expect(result1).toEqual('05/05/2019');

      const date2 = new Date(2019, 11, 25);
      const result2 = DateFormatter.formatDateAsMonthDayYear(date2);
      expect(result2).toEqual('11/25/2019');
    });
  });

  describe('WHEN verifying a date', () => {
    describe('AND it is valid', () => {
      it('SHOULD return true', () => {
        expect(DateFormatter.isDateValid('12/23/2010')).toBeTruthy();
      });
    });

    describe('AND it is invalid', () => {
      it('SHOULD return false', () => {
        expect(DateFormatter.isDateValid('####')).toBeFalsy();
      });
    });
  });
});
