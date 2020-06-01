import { Download as DownloadIcon, Trash2 as TrashIcon } from 'react-feather';
import {
  Breadcrumbs,
  Button,
  Grid,
  makeStyles,
  SvgIcon,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Link from '../../components/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  action: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    textTransform: 'none',
  },
}));

const Header = ({ className, handleRemoveAll, ...rest }) => {
  const classes = useStyles();

  const handleToPDF = () => {
    window.print();
  };
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
        </Breadcrumbs>
      </Grid>
      <Grid item>
        <Button
          color="primary"
          variant="contained"
          className={classes.action}
          onClick={handleToPDF}
        >
          <SvgIcon fontSize="small" className={classes.actionIcon}>
            <DownloadIcon />
          </SvgIcon>
          to PDF
        </Button>
        <Button
          color="secondary"
          variant="contained"
          className={classes.action}
          onClick={handleRemoveAll}
        >
          <SvgIcon fontSize="small" className={classes.actionIcon}>
            <TrashIcon />
          </SvgIcon>
          Remove All
        </Button>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  handleRemoveAll: PropTypes.func.isRequired,
};

export default Header;
