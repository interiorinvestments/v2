import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Page from '../../../../components/Page';
import ProductGallery from '../../../../components/ProductIdeas/ProductGallery';
import ideas from '../../../../data/ideate/productIdeas/corporate';
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
    <Page className={classes.root} title="Corporate Products">
      <Container maxWidth={false}>
        <Header />
        <Typography variant="h1">Product Ideas</Typography>
        <ProductGallery ideas={ideas} />
      </Container>
    </Page>
  );
};

export default CorporateView;