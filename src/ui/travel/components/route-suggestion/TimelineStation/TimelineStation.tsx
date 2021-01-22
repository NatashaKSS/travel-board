import React from 'react';
import { Box } from '@material-ui/core';
import { TimelineStationProps } from './TimelineStation.types';
import { useStyles } from './TimelineStation.style';

const TimelineStation = ({ stationName, description }: TimelineStationProps) => {
  const classes = useStyles();
  return (
    <Box minHeight={75} minWidth={250}>
      <Box className={classes.stationName}>{stationName}</Box>
      {description ? <Box className={classes.description}>{description}</Box> : null}
    </Box>
  );
};

export default TimelineStation;
