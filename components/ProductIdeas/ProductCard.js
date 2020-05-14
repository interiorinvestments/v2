import {
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Link from '../Link';

const useStyles = makeStyles({
  buttonBase: {
    width: '100%',
  },
  media: {
    height: 200,
  },
});

const ProductCard = ({ category }) => {
  const classes = useStyles();
  const router = useRouter();
  console.log(category);

  return (
    <Card>
      <ButtonBase
        href={`${router.pathname}/${category.slug}`}
        component={Link}
        naked
        className={classes.buttonBase}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`http://localhost:1337${category.image.url}`}
          />
          <CardContent>
            <Typography variant="h4">{category.name} ></Typography>
          </CardContent>
        </CardActionArea>
      </ButtonBase>
    </Card>
  );
};

ProductCard.propTypes = {
  category: PropTypes.object.isRequired,
};
export default ProductCard;
