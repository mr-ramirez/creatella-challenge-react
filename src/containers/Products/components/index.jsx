import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

import './Products.css';
import { IProductModel, IProductsState, IGetProductsRequest } from '../../../types.js';
import * as ProductActions from '../actions/index.js';
import SortTypes from '../sortTypes';
import ProductTableHead from './ProductTableHead.jsx';
import ProductTableBody from './ProductTableBody.jsx';

const styles = {
  PageTitle: {
    'marginTop': '20px',
  },
};

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      size: 20,
      sort: SortTypes.ID,
    };
  }

  componentDidMount() {
    this.retrieveProducts();
  }

  componentDidUpdate(previousProps) {
    const { sort: newSort } = this.props;
    const { sort: oldSort } = previousProps;

    if (newSort !== oldSort) {
      this.retrieveProducts();
    }
  }

  getTableBody() {
    return (
      <TableBody>
        {
          this.props.products.map((product: IProductModel, index: number) => {
            return this.getProductRow(product, `product-${index}`);
          })
        }
        
      </TableBody>
    );
  }

  getProductRow(product: IProductModel, key: number) {
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
  }

  sortProducts: Function = (sort: string) => {
    if (sort !== this.props.sort) {
      this.props.actions.changeSorting({ sort });
    }
  }

  retrieveProducts() {
    const { getProducts } = this.props.actions;

    const request: IGetProductsRequest = {
      page: this.props.page,
      size: this.props.pageSize,
      sort: this.props.sort,
    };

    getProducts(request);
  }
  
  render() {
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid style={styles.PageTitle} item xs={12}>
            <Typography variant="h4" align="center">
              Buy Ascii Faces
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Paper>
              <Table>
                <ProductTableHead sort={this.props.sort}
                  sortProducts={this.sortProducts} />

                <ProductTableBody products={this.props.products} />
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

Products.propTypes = {
  actions: PropTypes.object,
  products: PropTypes.array,
  page: PropTypes.number,
  pageSize: PropTypes.number,
  sort: PropTypes.string,
};

const mapStateToProps = (state: IProductsState) => ({
  isLoading: state.products.isLoading,
  products: state.products.products,
  page: state.products.page,
  pageSize: state.products.pageSize,
  sort: state.products.sort,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(ProductActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
