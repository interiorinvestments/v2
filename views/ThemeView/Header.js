import {
  Breadcrumbs,
  Button,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Link from '../../components/Link';

const useStyles = makeStyles((theme) => ({
  root: {},
  actionIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    textTransform: 'none',
  },
}));

const Header = ({ className, title, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Button
            variant="text"
            component={Link}
            naked
            href="/app"
            className={classes.button}
          >
            Dashboard
          </Button>
          <Typography variant="body2" color="textPrimary">
            Product Ideas
          </Typography>
          <Typography variant="body2" color="textPrimary">
            {title}
          </Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
