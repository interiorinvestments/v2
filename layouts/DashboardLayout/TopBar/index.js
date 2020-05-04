import React from 'react';
import { Menu as MenuIcon } from 'react-feather';
import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  makeStyles,
  SvgIcon,
  Toolbar,
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { useUser } from '../../../lib/hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    width: 100,
    borderRadius: 3,
  },
  toolbar: {
    minHeight: 64,
  },
}));

function TopBar({ className, onMobileNavOpen, ...rest }) {
  const classes = useStyles();
  const [user, { mutate }] = useUser();

  const handleLogout = async () => {
    await fetch('/api/logout');
    mutate({ user: null });
  };
  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <Button href="/">
            <img
              src="/img/logos/IILogo.jpg"
              alt="II Logo"
              className={classes.logo}
            />
          </Button>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        <Button color="secondary" variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
