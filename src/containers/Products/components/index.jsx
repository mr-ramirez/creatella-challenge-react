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
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

import './Products.css';
import { IProductModel, IProductsState, IGetProductsRequest } from '../../../types.js';
import * as ProductActions from '../actions/index.js'

const styles = {
  PageTitle: {
    'marginTop': '20px',
  },
};

class Products extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getProducts } = this.props.actions;
    const request: IGetProductsRequest = {
      page: 1,
      size: 10,
    };

    getProducts(request);
  }

  getProductRow(product, key) {
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
                <TableHead>
                  <TableRow>
                    <TableCell align="left">ID</TableCell>
                    <TableCell align="center">Face</TableCell>
                    <TableCell align="left">Font size</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Date added</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {
                    this.props.products.map((product: IProductModel, index: number) => {
                      return this.getProductRow(product, `product-${index}`);
                    })
                  }
                  
                </TableBody>
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
};

const mapStateToProps = (state: IProductsState) => ({
  isLoading: state.products.isLoading,
  products: state.products.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(ProductActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
