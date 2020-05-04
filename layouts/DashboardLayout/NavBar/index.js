import { useEffect } from 'react';
import {
  Award as AwardIcon,
  Image as ImageIcon,
  Info as InfoIcon,
  Map as MapIcon,
  MessageCircle as MessageCircleIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import NavItem from './NavItem';

const navConfig = [
  {
    subheader: 'Inform',
    items: [
      {
        title: 'About Us',
        icon: InfoIcon,
        href: '/app/inform/about-us',
      },
      {
        title: 'Differentiators',
        icon: AwardIcon,
        href: '/app/inform/differentiators',
      },
    ],
  },
  {
    subheader: 'Ideate',
    items: [
      {
        title: 'Floorplans',
        icon: MapIcon,
        href: '/app/ideate/floorplans',
        items: [
          {
            title: 'Corporate',
            href: '/app/ideate/floorplans/corporate',
          },
          {
            title: 'Healthcare',
            href: '/app/ideate/floorplans/healthcare',
          },
          {
            title: 'Education',
            href: '/app/ideate/floorplans/education',
          },
        ],
      },
    ],
  },
  {
    subheader: 'Images',
    items: [
      {
        title: 'Pictures',
        href: '/app/images',
        icon: ImageIcon,
      },
      {
        title: 'Testimonials',
        href: '/app/images',
        icon: MessageCircleIcon,
      },
    ],
  },
];

const renderNavItems = ({ items, ...rest }) => (
  <List disablePadding>
    {items.reduce(
      // eslint-disable-next-line no-use-before-define
      (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
      []
    )}
  </List>
);

renderNavItems.propTypes = {
  items: PropTypes.array,
};

const reduceChildRoutes = ({ acc, pathname, item, depth = 0 }) => {
  const key = item.title + depth;

  if (item.items) {
    const open = pathname === item.href;
    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />
    );
  }

  return acc;
};

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}));
const NavBar = ({ openMobile, onMobileClose }) => {
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [router.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <Button href="/app">
              <img
                src="/img/logos/IILogo.png"
                alt="II"
                style={{ width: 100 }}
              />
            </Button>
          </Box>
        </Hidden>
        <Divider />
        <Box p={2}>
          {navConfig.map((config) => (
            <List
              key={config.subheader}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {config.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: config.items,
                pathname: router.pathname,
              })}
            </List>
          ))}
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
