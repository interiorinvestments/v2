import { AppBar, Box, Button, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Link from '../../components/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    height: 64,
  },
  logo: {
    marginRight: theme.spacing(2),
    width: '100px',
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} color="default" {...rest}>
      <Toolbar className={classes.toolbar}>
        <Button component={Link} href="/">
          <img
            className={classes.logo}
            src="/img/logos/IILogo.png"
            alt="Interior Investments Logo"
          />
        </Button>

        <Box flexGrow={1} />

        <Button
          color="primary"
          variant="contained"
          component={Link}
          href="/login"
          naked
        >
          Log in
        </Button>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
