import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Page from '../../components/Page';
import ProductTable from '../../components/ProductTable';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const DashboardView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Header />
        <ProductTable />
      </Container>
    </Page>
  );
};

export default DashboardView;
