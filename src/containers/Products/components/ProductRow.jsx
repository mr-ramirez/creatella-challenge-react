import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';

const ProductRow = ({ product }) => {
  const { id, size, price, face, date } = product;

  return (
    <TableRow>
      <TableCell align="left">{id}</TableCell>

      <TableCell align="left">
        <Chip style={{ 'fontSize': size }} label={face} variant="outlined" />
      </TableCell>

      <TableCell align="left">{size}</TableCell>

      <TableCell align="right">{price}</TableCell>

      <TableCell align="right">{date}</TableCell>
    </TableRow>
  );
};


ProductRow.propTypes = {
  product: PropTypes.object,
};


export default ProductRow;
