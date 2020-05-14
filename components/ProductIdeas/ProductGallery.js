import { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
  name: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
}));

const ProductGallery = ({ theme }) => {
  const classes = useStyles();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:1337/themes/${theme.id}`);
      const data = await res.json();
      setCategories(data.categories);
    };
    getData();
  }, [theme.id]);
  return (
    <>
      <Typography variant="h1" className={classes.name}>
        {theme.title}
      </Typography>
      <Grid container alignItems="flex-start" direction="row" spacing={4}>
        {categories?.map((category, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard category={category} key={index} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

ProductGallery.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default ProductGallery;
