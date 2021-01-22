import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './EmptyTimeline.style';
import TrainImage from 'lib/ui/assets/images/Train.png';

const EmptyTimeline = () => {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <Box className={classes.imageSection}>
        <img className={classes.image} width="45%" src={TrainImage} alt="Train"></img>
      </Box>
      <Typography className={classes.title}>Start searching for the best MRT route!</Typography>
      <Typography className={classes.description}>
        Begin by entering your starting point & destination
      </Typography>
    </Box>
  );
};

export default EmptyTimeline;
