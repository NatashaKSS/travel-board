import React from 'react';
import { TimelineProps } from './Timeline.types';
import MaterialUiTimeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineStation from '../TimelineStation/TimelineStation';
import EmptyTimeline from '../EmptyTimeline/EmptyTimeline';

const Timeline = ({ path }: TimelineProps) => {
  if (path.length === 0) {
    return <EmptyTimeline />;
  } else {
    return (
      <MaterialUiTimeline align="left">
        {path.map((station) => {
          return (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineStation stationName={station.name} description="Change to NS line" />
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </MaterialUiTimeline>
    );
  }
};

export default Timeline;
