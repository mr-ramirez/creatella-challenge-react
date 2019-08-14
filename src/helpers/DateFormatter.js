const DateFormatter = {
  MILLISECONDS_IN_A_DAY: 86400000,

  getDifferenceInDays: function(from, to): number {
    const fromDateInMilliseconds = from.getTime();
    const toDateInMilliseconds = to.getTime();

    const differenceInMilliseconds = Math.abs(toDateInMilliseconds - fromDateInMilliseconds);
    return Math.ceil(differenceInMilliseconds / this.MILLISECONDS_IN_A_DAY);
  },

  now: function() {
    return new Date();
  },

  parseValueToDate: function(value) {
    return new Date(value);
  },

  formatDateAsMonthDayYear: function(date): string {
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    return `${formattedMonth}/${formattedDay}/${year}`;
  },

  isDateValid: function(date): boolean {
    return !isNaN(Date.parse(date));
  }
};

Object.freeze(DateFormatter);

export default DateFormatter;
