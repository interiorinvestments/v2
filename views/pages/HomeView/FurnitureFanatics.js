import {
  Avatar,
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
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));

const FurnitureFanatics = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="overline"
          color="primary"
          align="center"
        >
          Furniture Fanatics
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          What We Do
        </Typography>
        <Box mt={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>01</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Services
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Interior Investments offers holistic solutions for
                    organizations dealing with growth and change. Our
                    experience, innovative practices, efficiency expertise, and
                    attention to detail are all key to our success in the
                    furniture industry.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>02</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Process
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Our process begins with you: our partner. We take into
                    account every step that’s involved in your project, and
                    offer unique, sustainable solutions.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>03</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Sustainability
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Sustainability isn’t just something we value—it’s how we
                    think. Our commitment to environmentally sustainable
                    practices is an extension of our broader goal of being a
                    responsible corporate citizen.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

FurnitureFanatics.propTypes = {
  className: PropTypes.string,
};

export default FurnitureFanatics;
