import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import ProductGallery from '../../components/ProductIdeas/ProductGallery';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const ThemeView = ({ products, title }) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title={title}>
      <Container maxWidth={false}>
        <Header title={title} />
        <ProductGallery products={products} title={title} />
      </Container>
    </Page>
  );
};

ThemeView.propTypes = {
  products: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ThemeView;
