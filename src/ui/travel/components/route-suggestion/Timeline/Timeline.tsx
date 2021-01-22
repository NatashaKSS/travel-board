import React from 'react';
import { TimelineProps } from './Timeline.types';
import MaterialUiTimeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineStation from '../TimelineStation/TimelineStation';

const Timeline = ({ path }: TimelineProps) => {
  return (
    <MaterialUiTimeline align="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineStation stationName="Yew Tee" description="Change to NS line" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineStation stationName="Choa Chu Kang" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineStation stationName="Gardens By The Bay" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineStation stationName="Changi Airport" />
        </TimelineContent>
      </TimelineItem>
    </MaterialUiTimeline>
  );
};

export default Timeline;
