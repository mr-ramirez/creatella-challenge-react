import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import './styles.css';

const propTypes = {
  image: PropTypes.string,
  hideAd: PropTypes.func,
};

const CloseIcon = 'M4.07108 18.599C3.62533 19.0447 3.62533 19.7674 4.07108 20.2132C4.51684 20.659 5.23954 20.659 5.6853 20.2132L12.1422 13.7563L18.599 20.2132C19.0448 20.659 19.7675 20.659 20.2132 20.2132C20.659 19.7674 20.659 19.0447 20.2132 18.599L13.7564 12.1421L20.2132 5.68528C20.659 5.23953 20.659 4.51682 20.2132 4.07107C19.7675 3.62531 19.0448 3.62531 18.599 4.07107L12.1422 10.5279L5.6853 4.07107C5.23955 3.62531 4.51684 3.62531 4.07108 4.07107C3.62533 4.51682 3.62533 5.23953 4.07108 5.68528L10.5279 12.1421L4.07108 18.599Z';

const AdDisplayer = (props) => {
  return (
    <div className="AdContainer">
      <Card>
        <div>
          <CardContent className="AdContent">
            <Grid container spacing={1}>

              <Grid item xs={12}>

                <Grid container spacing={1} direction="row"
                  alignItems="center" justify="center">

                  <Grid item xs={10}>
                    <Typography variant="subtitle1">
                      Ad info will be place here
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <IconButton aria-label="close-ad"
                      onClick={() => {props.hideAd()}}>
                      <SvgIcon width="24" height="24" viewBox="0 0 24 24">
                        <path d={CloseIcon} fill={'#286FA9'} fillRule="evenodd" clipRule="evenodd"></path>
                      </SvgIcon>
                    </IconButton>
                  </Grid>

                </Grid>

              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <img src={props.image} />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};


AdDisplayer.propTypes = propTypes;


export default AdDisplayer;
