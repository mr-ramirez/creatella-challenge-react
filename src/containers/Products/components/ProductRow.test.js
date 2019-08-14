import React from 'react';
import { shallow } from 'enzyme';
import TableCell from '@material-ui/core/TableCell';

import ProductRow from './ProductRow.jsx';
import { IProductModel } from '../../../types';

describe('ProductRow Component', () => {
  const fakeProduct: IProductModel = {
    id: 'j10-2',
    size: '20 px',
    price: '$ 100.00',
    face: '(- l -)',
    date: '2 days ago',
  };

  const fakeKey = 'product-1';

  it('SHOULD render', () => {
    const wrapper = shallow(<ProductRow product={fakeProduct} key={fakeKey} />);

    expect(wrapper.find(TableCell)).toHaveLength(5);
  });
});
