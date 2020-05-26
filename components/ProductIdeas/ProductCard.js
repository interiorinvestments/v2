import { useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

import formatCurrency from '../../utils/formatCurrency';
import AddToCart from '../AddToCart';

const ModelViewer = dynamic(() => import('../ModelViewer'), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  img: {
    height: 'auto',
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  details: {
    paddingLeft: theme.spacing(1),
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const [toggleModel, setToggleModel] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Typography variant="h1">{product.name}</Typography>
      <Typography variant="h6" color="textSecondary">
        {product.company}
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={6}>
          {!toggleModel ? (
            <img
              src={`${process.env.NEXT_PUBLIC_CMS_URL}${product.image.url}`}
              alt={product.name}
              className={classes.img}
            />
          ) : (
            <ModelViewer product={product} />
          )}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.details}>
          <Typography variant="h4" gutterBottom>
            Product Details
          </Typography>
          <Typography variant="subtitle1">Company</Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {product.company}
          </Typography>
          <Typography variant="subtitle1">Starting Price</Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {formatCurrency(product.price)}
          </Typography>
          <Typography variant="subtitle1">Description</Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {product.description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClickOpen}
          >
            <ShoppingCartOutlinedIcon /> Add to cart
          </Button>
          {product.model && (
            <>
              {!toggleModel ? (
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={() => setToggleModel(true)}
                >
                  <ThreeDRotationIcon />
                  &nbsp; View
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={() => setToggleModel(false)}
                >
                  <ImageOutlinedIcon /> View
                </Button>
              )}
            </>
          )}
        </Grid>
      </Grid>
      <AddToCart handleClose={handleClose} open={open} product={product} />
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
