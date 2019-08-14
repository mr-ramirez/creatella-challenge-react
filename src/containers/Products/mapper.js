import { IProductModel } from '../../types';
import DateFormatter from '../../helpers/DateFormatter';
import CurrencyFormatter from '../../helpers/CurrencyFormatter';

const DAYS_IN_A_WEEK = 7;

export function ConvertToProductModel(product: Object): IProductModel {
  let formattedDate: string = '';

  if (DateFormatter.isDateValid(product.date))
    formattedDate = formatDate(product.date);
  else
    formattedDate = '---';

  const model: IProductModel = {
    id: product.id,
    size: `${product.size}px`,
    price: CurrencyFormatter.convertFromNumberToDollarString(product.price),
    face: product.face,
    date: formattedDate,
  };

  return model;
}

function formatDate(dateToFormat): string {
  const dateToFormatParsed = DateFormatter.parseValueToDate(dateToFormat);
  const today = DateFormatter.now();
  const differenceInDays = DateFormatter.getDifferenceInDays(dateToFormatParsed, today);

  if (differenceInDays <= 1)
    return `1 day ago`;
  else if (differenceInDays > 1 && differenceInDays <= DAYS_IN_A_WEEK)
    return `${differenceInDays} days ago`;

  return DateFormatter.formatDateAsMonthDayYear(dateToFormatParsed);
}
