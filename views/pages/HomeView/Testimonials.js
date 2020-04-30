import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128,
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Testimonials({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          className={classes.title}
        >
          A well-designed space can breathe life back into your workplace.
          Achieve more with a Living Office.
        </Typography>
      </Container>
    </div>
  );
}

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
