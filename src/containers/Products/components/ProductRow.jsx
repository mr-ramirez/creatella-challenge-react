import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';

import { IProductModel } from '../../../types';

const propTypes = {
  product: IProductModel,
  key: PropTypes.string,
};

const ProductRow = ({ product, key }) => {
  const { id, size, price, face, date } = product;

  return (
    <TableRow key={key}>
      <TableCell align="left">{id}</TableCell>

      <TableCell align="left">
        <Chip label={face} variant="outlined" />
      </TableCell>

      <TableCell align="left">{size}</TableCell>

      <TableCell align="right">{price}</TableCell>

      <TableCell align="right">{date}</TableCell>
    </TableRow>
  );
};


ProductRow.propTypes = propTypes;


export default ProductRow;
