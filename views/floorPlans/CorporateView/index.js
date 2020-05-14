import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Floorplan from '../../../../components/FloorPlan';
import Page from '../../../../components/Page';
import MAP from '../../../../data/ideate/floorPlan/corporate';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const CorporateView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Corporate FloorPlan">
      <Container maxWidth={false}>
        <Header />
        <Floorplan
          image="/img/ideate/floorPlans/Baltimore1.png"
          map={MAP}
          title="Corporate"
        />
      </Container>
    </Page>
  );
};

export default CorporateView;
