import React from 'react';
import { Paper } from '@material-ui/core';
import { useStyles } from './TimelineSection.style';
import TimelineContainer from '../Timeline/TimelineContainer';

const TimelineSection = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.section} elevation={2}>
      <TimelineContainer />
    </Paper>
  );
};

export default TimelineSection;
