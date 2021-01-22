import React from 'react';
import { Paper } from '@material-ui/core';
import { useStyles } from './TimelineSection.style';
import { TimelineSectionProps } from './TimelineSection.types';
import Timeline from '../Timeline/Timeline';
import TimelineSummary from '../TimelineSummary/TimelineSummary';

const TimelineSection = ({ path }: TimelineSectionProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.section} elevation={2}>
      {path.length >= 1 ? <TimelineSummary totalNumberOfStations={path.length} /> : null}
      <Timeline path={path} />
    </Paper>
  );
};

export default TimelineSection;
