import { Card, CardActionArea, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    height: 40,
    paddingLeft: theme.spacing(2),
  },
}));

const AreasList = ({ areasItems }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      {areasItems.map((item) => {
        const color = `${item.color.slice(0, -7)})`;
        return (
          <Grid key={item.name} item xs={12} sm={6} md={3}>
            <Card
              style={{ borderLeft: `20px solid ${color}` }}
              className={classes.card}
            >
              <CardActionArea>
                <Grid container alignItems="center">
                  <Typography variant="body1">{item.name}</Typography>
                </Grid>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

AreasList.propTypes = {
  areasItems: PropTypes.array.isRequired,
};

export default AreasList;
