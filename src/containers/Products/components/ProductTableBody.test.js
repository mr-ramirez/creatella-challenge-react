import React from 'react';
import { shallow } from 'enzyme';
import TableBody from '@material-ui/core/TableBody';

import ProductTableBody from './ProductTableBody.jsx';
import ProductRow from './ProductRow.jsx';
import { IProductModel } from '../../../types';

describe('ProductTableBody Component', () => {
  const fakeProduct: IProductModel = {
    id: 'j10-2',
    size: '20 px',
    price: '$ 100.00',
    face: '(- l -)',
    date: '2 days ago',
  };

  it('SHOULD render', () => {
    const wrapper = shallow(<ProductTableBody products={[fakeProduct]} />);

    expect(wrapper.find(TableBody)).toHaveLength(1);
    expect(wrapper.find(ProductRow)).toHaveLength(1);
  });
});
