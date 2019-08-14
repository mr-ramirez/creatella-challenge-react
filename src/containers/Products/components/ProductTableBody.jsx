import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';

import ProductRow from './ProductRow.jsx';
import { IProductModel } from '../../../types';

const propTypes = {
  products: PropTypes.array,
};

const ProductTableBody = ({ products }) => {
  return (
    <TableBody>
      {
        products.map((product: IProductModel, index: number) => {
          return (<ProductRow product={product} key={`product-${index}`} />);
        })
      }
    </TableBody>
  );
};

ProductTableBody.propTypes = propTypes;

export default ProductTableBody;
