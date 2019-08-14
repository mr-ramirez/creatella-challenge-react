import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import SortTypes from '../sortTypes';

const propTypes = {
  sort: PropTypes.string,
  sortProducts: PropTypes.func,
};

const ProductTableHead = ({ sort, sortProducts }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left"
          sortDirection="asc">
          <TableSortLabel direction="asc"
            id="SortLabel_Id"
            onClick={() => sortProducts(SortTypes.ID)}
            active={sort === SortTypes.ID}>
            ID
          </TableSortLabel>
        </TableCell>

        <TableCell align="left">Face</TableCell>

        <TableCell align="left"
          sortDirection="asc">
          <TableSortLabel direction="asc"
            id="SortLabel_Size"
            onClick={() => sortProducts(SortTypes.SIZE)}
            active={sort === SortTypes.SIZE}>
            Font size
          </TableSortLabel>
        </TableCell>

        <TableCell align="right"
          sortDirection="asc">
          <TableSortLabel direction="asc"
            id="SortLabel_Price"
            onClick={() => sortProducts(SortTypes.PRICE)}
            active={sort === SortTypes.PRICE}>
            Price
          </TableSortLabel>
        </TableCell>

        <TableCell align="right">Date added</TableCell>
      </TableRow>
    </TableHead>
  )
}

ProductTableHead.propTypes = propTypes;

export default ProductTableHead;
