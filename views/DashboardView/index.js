import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Page from '../../components/Page';
import ProductTable from '../../components/ProductTable';
import RemoveAllDialog from '../../components/ProductTable/RemoveAllDialog';
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
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (res.status === 200) {
          const response = await res.json();
          response.products.forEach((product) => {
            product.subTotal /= 100;
            product.price /= 100;
          });
          setProducts(response.products);
        }
      } catch (err) {
        throw new Error(err);
      }
    };
    getProducts();
  }, []);

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Header handleRemoveAll={() => setOpen(true)} />
        {products.length > 0 && (
          <ProductTable products={products} setProducts={setProducts} />
        )}
        <RemoveAllDialog open={open} handleClose={() => setOpen(false)} />
      </Container>
    </Page>
  );
};

export default DashboardView;
