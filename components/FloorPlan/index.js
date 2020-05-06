import { useState } from 'react';
import ImageMapper from 'react-image-mapper';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import AreasList from './AreasList';

const useStyles = makeStyles((theme) => ({
  areaName: {
    margin: theme.spacing(1),
    height: 40,
  },
}));

const FloorPlan = ({ image, map, title }) => {
  const classes = useStyles();
  const [hoveredArea, setHoveredArea] = useState(null);

  const enterArea = (area) => {
    setHoveredArea(area);
  };
  const getMapFromArray = (data) =>
    data.reduce((acc, item) => {
      acc[item.name] = { color: item.preFillColor, name: item.name };
      return acc;
    }, {});

  const areasList = getMapFromArray(map.areas);

  const leaveArea = () => {
    setHoveredArea(null);
  };
  return (
    <>
      <Grid container direction="column" alignItems="center">
        {title && (
          <Grid item>
            <Typography variant="h1" color="primary">
              {title} FloorPlan
            </Typography>
          </Grid>
        )}
        <Grid item>
          <ImageMapper
            src={image}
            map={map}
            onMouseEnter={(area) => enterArea(area)}
            onMouseLeave={() => leaveArea()}
          />
        </Grid>
      </Grid>
      <div className={classes.areaName}>
        <Typography align="center" variant="h3">
          {hoveredArea ? hoveredArea.name : null}
        </Typography>
      </div>
      <AreasList areasItems={Object.values(areasList)} />
    </>
  );
};

FloorPlan.propTypes = {
  image: PropTypes.string.isRequired,
  map: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default FloorPlan;
