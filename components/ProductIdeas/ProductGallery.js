import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import CategoryCard from './CategoryCard';

const useStyles = makeStyles((theme) => ({
  name: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
}));

const ProductGallery = ({ products, title }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h1" className={classes.name}>
        {title}
      </Typography>
      <Grid container alignItems="flex-start" direction="row" spacing={4}>
        {products?.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CategoryCard category={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

ProductGallery.propTypes = {
  products: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductGallery;
