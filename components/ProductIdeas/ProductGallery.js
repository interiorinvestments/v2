import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

const ProductGallery = ({ ideas }) => (
  <Grid container alignItems="flex-start" direction="row" spacing={4}>
    {ideas.map((idea, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <ProductCard idea={idea} />
      </Grid>
    ))}
  </Grid>
);

ProductGallery.propTypes = {
  ideas: PropTypes.array.isRequired,
};

export default ProductGallery;
