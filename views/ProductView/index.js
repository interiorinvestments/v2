import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import ProductCard from '../../components/ProductIdeas/ProductCard';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const ProductView = ({ product }) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title={product.name}>
      <Container maxWidth={false}>
        <Header title={product.name} />
        <ProductCard product={product} />
      </Container>
    </Page>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
