import { forwardRef, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Slide,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import PropTypes from 'prop-types';

import formatCurrency from '../utils/formatCurrency';

const useStyles = makeStyles((theme) => ({
  img: {
    height: 'auto',
    width: '100%',
  },
  details: {
    paddingLeft: theme.spacing(1),
  },
  quantityArea: {
    alignItems: 'center',
  },
  quantity: {
    marginTop: theme.spacing(1),
    maxWidth: 150,
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddToCart = ({ handleClose, open, product }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`/api/product/${product.slug}`);
        if (res.status === 200) {
          const response = await res.json();
          setQuantity(response.product.quantity);
        }
      } catch (err) {
        throw new Error(err);
      }
    };

    getData();
  }, [product.slug]);

  const handleAdd = async () => {
    product.quantity = +quantity;
    try {
      const res = await fetch('/api/product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product }),
      });
      handleClose();
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <Grid container>
          <Grid item xs={6}>
            <img
              src={`${process.env.NEXT_PUBLIC_CMS_URL}${product.image.url}`}
              alt={product.name}
              className={classes.img}
            />
          </Grid>
          <Grid item xs={6} className={classes.details}>
            <Typography variant="h2">{product.name}</Typography>

            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              {product.company}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {formatCurrency(product.price)} per unit
            </Typography>
            <TextField
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              margin="none"
              value={quantity}
              className={classes.quantity}
              onChange={(e) => setQuantity(e.target.value)}
              variant="outlined"
              label="Quantity"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          <AddShoppingCartOutlinedIcon /> Add to cart
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddToCart.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
};

export default AddToCart;
