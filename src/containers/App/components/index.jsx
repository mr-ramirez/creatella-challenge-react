import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Box from '@material-ui/core/Box';
import './App.css';
import Navbar from '../../../components/Navbar/index.jsx';
import Products from '../../Products/components/index.jsx';
import { IProductsState } from '../../../types';

const propTypes = {
  isLoading: PropTypes.boolean,
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Box component="main" maxWith={false}>
        <Navbar isLoading={this.props.isLoading}></Navbar>

        <Router>
          <Route path="/" exact component={Products} />
        </Router>
      </Box>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = (state: IProductsState) => ({
  isLoading: state.products.isLoading,
});

export default connect(mapStateToProps)(App);
