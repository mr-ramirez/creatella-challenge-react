import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Box from '@material-ui/core/Box';
import './App.css';
import Navbar from '../../../components/Navbar/index.jsx';
import Products from '../../Products/components/index.jsx';
import AdDisplayer from '../../../components/AdDisplayer/index.jsx'
import { IGlobalState } from '../../../types';
import * as AppActions from '../../App/actions/index.js';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Box component="main" maxWith={false}>
        <Navbar isLoading={this.props.isLoading} />

        <Router>
          <Route path="/" exact component={Products} />
        </Router>

        {
          this.props.isAdHidden || this.props.ad === '' ?
            null
            :
            <AdDisplayer image={this.props.ad}
              hideAd={this.props.actions.hideAd} />
        }
      </Box>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool,
  ad: PropTypes.string,
  isAdHidden: PropTypes.bool,
  actions: PropTypes.object,
};

const mapStateToProps = (state: IGlobalState) => ({
  isLoading: state.products.isLoading,
  ad: state.app.ad,
  isAdHidden: state.app.isAdHidden,
});

const mapDispatchToProps = (dispatch: Function) => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
