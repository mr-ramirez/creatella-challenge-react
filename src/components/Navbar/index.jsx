import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const propTypes = {
  isLoading: PropTypes.boolean,
};

function Navbar(props) {
  return (
    <div>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Creatella React Challenge
          </Typography>
        </Toolbar>
        {
          props.isLoading ?
            <LinearProgress />
          :
            null
        }
      </AppBar>
    </div>
  )
}

Navbar.propTypes = propTypes;

export default Navbar;
