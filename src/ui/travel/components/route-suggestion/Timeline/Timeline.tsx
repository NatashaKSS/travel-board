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
        {path.map((station, i) => {
          let description = null;
          if (i > 0 && station.line !== path[i - 1].line) {
            description = `Transfer to the ${station.line} line`;
          }
          return (
            <TimelineItem key={station.name}>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: getColorOfLine(station.line) }} />
                {i < path.length - 1 ? (
                  <TimelineConnector style={{ backgroundColor: getColorOfLine(station.line) }} />
                ) : null}
              </TimelineSeparator>
              <TimelineContent>
                <TimelineStation stationName={station.name} description={description} />
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </MaterialUiTimeline>
    );
  }
};

/* istanbul ignore next */
const getColorOfLine = (line: string | null) => {
  switch (line) {
    case 'CC':
      return '#f2ae1b';
    case 'CE':
      return '#b0e094';
    case 'CG':
    case 'EW':
      return '#5dad2f';
    case 'DT':
      return '#3639e3';
    case 'JE':
    case 'TE':
      return '#9e6124';
    case 'JS':
    case 'JW':
      return '#5dc6c9';
    case 'NE':
      return '#963593';
    case 'NS':
      return '#c91414';
    case 'BP':
    case 'PE':
    case 'PW':
    case 'SE':
    case 'SW':
      return '#7d7d7d';
    default:
      return '#dbdbdb';
  }
};

export default Timeline;
