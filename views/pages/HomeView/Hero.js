import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 200,
    paddingBottom: 200,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60,
    },
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '75%',
      height: 'auto',
      transform: 'rotateY(-35deg) rotateX(15deg)',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows[16],
    },
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
    },
  },
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography variant="overline" color="primary">
                Interior Investments
              </Typography>
              <Typography variant="h1" color="textPrimary">
                Create a Space that Brings Out Your Best
              </Typography>
              <Box mt={3}>
                <Typography variant="body1" color="textSecondary">
                  Your furniture is an asset. A chair isn’t simply a place to
                  sit, and a desk isn’t just a work surface. The right selection
                  today can create a sense of place, enhance productivity, and
                  improve employee satisfaction, engagement, and retention far
                  into the future.
                </Typography>
              </Box>
              <Box mt={3}>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography variant="h1" color="primary">
                      30+
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      Demo Pages
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h1" color="primary">
                      HMI
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      Certified Dealer
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h1" color="primary">
                      +99.5%
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      Customer Satisfaction
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box position="relative">
              <div className={classes.shape}>
                <img alt="Shapes" src="/img/home/shapes.svg" />
              </div>
              <div className={classes.image}>
                <img alt="Presentation" src="/img/home/hq.jpg" />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
