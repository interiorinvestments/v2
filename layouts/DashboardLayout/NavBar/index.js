import { useEffect } from 'react';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Briefcase as BriefcaseIcon,
  Calendar as CalendarIcon,
  DollarSign as DollarSignIcon,
  Edit as EditIcon,
  Folder as FolderIcon,
  Layout as LayoutIcon,
  Lock as LockIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  PieChart as PieChartIcon,
  Share2 as ShareIcon,
  Shield as ShieldIcon,
  ShoppingCart as ShoppingCartIcon,
  Trello as TrelloIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import NavItem from './NavItem';

const navConfig = [
  {
    subheader: 'Reports',
    items: [
      {
        title: 'Dashboard',
        icon: PieChartIcon,
        href: '/app/reports/dashboard',
      },
      {
        title: 'Dashboard Alternative',
        icon: BarChartIcon,
        href: '/app/reports/dashboard-alternative',
      },
    ],
  },
  {
    subheader: 'Management',
    items: [
      {
        title: 'Customers',
        icon: UsersIcon,
        href: '/app/management/customers',
        items: [
          {
            title: 'List Customers',
            href: '/app/management/customers',
          },
          {
            title: 'View Customer',
            href: '/app/management/customers/1',
          },
          {
            title: 'Edit Customer',
            href: '/app/management/customers/1/edit',
          },
        ],
      },
      {
        title: 'Products',
        icon: ShoppingCartIcon,
        href: '/app/management/products',
        items: [
          {
            title: 'List Products',
            href: '/app/management/products',
          },
          {
            title: 'Create Product',
            href: '/app/management/products/create',
          },
        ],
      },
      {
        title: 'Orders',
        icon: FolderIcon,
        href: '/app/management/orders',
        items: [
          {
            title: 'List Orders',
            href: '/app/management/orders',
          },
          {
            title: 'View Order',
            href: '/app/management/orders/1',
          },
        ],
      },
      {
        title: 'Invoices',
        icon: ReceiptIcon,
        href: '/app/management/invoices',
        items: [
          {
            title: 'List Invoices',
            href: '/app/management/invoices',
          },
          {
            title: 'View Invoice',
            href: '/app/management/invoices/1',
          },
        ],
      },
    ],
  },
  {
    subheader: 'Applications',
    items: [
      {
        title: 'Projects Platform',
        href: '/app/projects',
        icon: BriefcaseIcon,
        items: [
          {
            title: 'Overview',
            href: '/app/projects/overview',
          },
          {
            title: 'Browse Projects',
            href: '/app/projects/browse',
          },
          {
            title: 'Create Project',
            href: '/app/projects/create',
          },
          {
            title: 'View Project',
            href: '/app/projects/1',
          },
        ],
      },
      {
        title: 'Social Platform',
        href: '/app/social',
        icon: ShareIcon,
        items: [
          {
            title: 'Profile',
            href: '/app/social/profile',
          },
          {
            title: 'Feed',
            href: '/app/social/feed',
          },
        ],
      },
      {
        title: 'Kanban',
        href: '/app/kanban',
        icon: TrelloIcon,
      },
      {
        title: 'Mail',
        href: '/app/mail',
        icon: MailIcon,
        info: () => <Chip color="secondary" size="small" label="Updated" />,
      },
      {
        title: 'Chat',
        href: '/app/chat',
        icon: MessageCircleIcon,
        info: () => <Chip color="secondary" size="small" label="Updated" />,
      },
      {
        title: 'Calendar',
        href: '/app/calendar',
        icon: CalendarIcon,
      },
    ],
  },
  {
    subheader: 'Auth',
    items: [
      {
        title: 'Login',
        href: '/login-unprotected',
        icon: LockIcon,
      },
      {
        title: 'Register',
        href: '/register-unprotected',
        icon: UserPlusIcon,
      },
      {
        title: 'Login: Guest Protected',
        href: '/login',
        icon: ShieldIcon,
      },
      {
        title: 'Register: Guest Protected',
        href: '/register',
        icon: ShieldIcon,
      },
    ],
  },
  {
    subheader: 'Pages',
    href: '/app/pages',
    items: [
      {
        title: 'Account',
        href: '/app/account',
        icon: UserIcon,
      },
      {
        title: 'Error',
        href: '/404',
        icon: AlertCircleIcon,
      },
      {
        title: 'Pricing',
        href: '/pricing',
        icon: DollarSignIcon,
      },
    ],
  },
  {
    subheader: 'Extra',
    items: [
      {
        title: 'Charts',
        href: '/app/extra/charts',
        icon: BarChartIcon,
        items: [
          {
            title: 'Apex Charts',
            href: '/app/extra/charts/apex',
          },
        ],
      },
      {
        title: 'Forms',
        href: '/app/extra/forms',
        icon: EditIcon,
        items: [
          {
            title: 'Formik',
            href: '/app/extra/forms/formik',
          },
          {
            title: 'Redux Forms',
            href: '/app/extra/forms/redux',
          },
        ],
      },
      {
        title: 'Editors',
        href: '/app/extra/editors',
        icon: LayoutIcon,
        items: [
          {
            title: 'DraftJS Editor',
            href: '/app/extra/editors/draft-js',
          },
          {
            title: 'Quill Editor',
            href: '/app/extra/editors/quill',
          },
        ],
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
