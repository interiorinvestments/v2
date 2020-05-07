import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

const ProductCard = ({ idea }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={idea.img} />
        <CardContent>
          <Typography variant="h4">{idea.name} ></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ProductCard;
