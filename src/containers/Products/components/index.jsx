import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import './styles.css';
import { IGlobalState, IGetProductsRequest } from '../../../types.js';
import * as AppActions from '../../App/actions/index.js';
import * as ProductActions from '../actions/index.js';
import SortTypes from '../sortTypes';
import ProductTableHead from './ProductTableHead.jsx';
import ProductTableBody from './ProductTableBody.jsx';

const styles = {
  PageTitle: {
    'marginTop': '20px',
  },
};

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      size: 20,
      sort: SortTypes.ID,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    this.retrieveProducts();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(previousProps) {
    const { sort: newSort, page: newPage, pageSize } = this.props;
    const { sort: oldSort, page: oldPage } = previousProps;

    if (newSort !== oldSort || newPage !== oldPage) {
      this.retrieveProducts();
    }

    const currentNumberOfResults = newPage * pageSize;
    const shouldNewAdBeDisplayed = (currentNumberOfResults % 20) === 0;

    if (newPage !== oldPage && shouldNewAdBeDisplayed) {
      this.loadAd();
    }
  }

  handleScroll = () => {
    const element = document.getElementById('products-grid');
    const limitHeight = element.getBoundingClientRect().bottom;

    if (limitHeight <= window.innerHeight) {
      this.props.actions.nextPage();
    }
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

  loadAd() {
    const { randomNumbersUsed } = this.props;
    const MIN = 1;
    const MAX = 1084;

    let newRandomNumber = Math.floor(Math.random() * (MAX - MIN) + MIN);
    let randomNumberFound = randomNumbersUsed.find((number) => number === newRandomNumber);

    while (randomNumberFound !== undefined)
      newRandomNumber = Math.floor(Math.random() * (MAX - MIN) + MIN);

    this.props.actions.loadNewAd(newRandomNumber);
  }
  
  render() {
    return (
      <Container id="products-grid">
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

          <Grid item xs={12}>
            {
              this.props.wasTheEndOfResultsReached ?
                <Typography align="center"
                  display="block"
                  variant="subtitle1">End of Catalog</Typography>
                :
                null
            }
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
  wasTheEndOfResultsReached: PropTypes.boolean,
  randomNumbersUsed: PropTypes.array,
};

const mapStateToProps = (state: IGlobalState) => ({
  isLoading: state.products.isLoading,
  products: state.products.products,
  page: state.products.page,
  pageSize: state.products.pageSize,
  sort: state.products.sort,
  wasTheEndOfResultsReached: state.products.wasTheEndOfResultsReached,
  randomNumbersUsed: state.app.randomNumbersUsed,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators({ ...AppActions, ...ProductActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
