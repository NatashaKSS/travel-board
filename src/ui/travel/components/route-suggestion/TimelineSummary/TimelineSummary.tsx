import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { TimelineSummaryProps } from './TimelineSummary.types';
import { useStyles } from './TimelineSummary.style';

const MINUTES_PER_STATION = 3;

const TimelineSummary = ({ totalNumberOfStations }: TimelineSummaryProps) => {
  const classes = useStyles();
  const estimatedMinutes = totalNumberOfStations * MINUTES_PER_STATION;
  return (
    <Paper className={classes.section}>
      <Typography className={classes.text}>
        Your journey takes <b>{totalNumberOfStations}</b> stations. Expect at least{' '}
        <b>{estimatedMinutes}</b> mins of travel time.
      </Typography>
    </Paper>
  );
};

export default TimelineSummary;
