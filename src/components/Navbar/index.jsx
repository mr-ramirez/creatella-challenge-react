import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Navbar(props) {
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Creatella React Challenge
          </Typography>
        </Toolbar>
      </AppBar>
      {
        props.isLoading ?
          <LinearProgress />
        :
          null
      }
    </div>
  )
}
