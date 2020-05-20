import { useEffect, useState } from 'react';
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

const ThemeGallery = ({ theme }) => {
  const classes = useStyles();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/themes/${theme.id}`
      );
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
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

ThemeGallery.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default ThemeGallery;
