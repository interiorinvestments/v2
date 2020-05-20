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

const CategoryCard = ({ category }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Card>
      <ButtonBase
        href={`${router.asPath}/${category.slug}`}
        component={Link}
        naked
        className={classes.buttonBase}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${process.env.NEXT_PUBLIC_CMS_URL}${category.image.formats.small.url}`}
          />
          <CardContent>
            <Typography variant="h4">{category.name} ></Typography>
          </CardContent>
        </CardActionArea>
      </ButtonBase>
    </Card>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
};
export default CategoryCard;
