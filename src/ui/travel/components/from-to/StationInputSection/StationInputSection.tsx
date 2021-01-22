import React from 'react';
import { Box, Paper } from '@material-ui/core';
import { StationInputSectionProps } from './StationInputSection.types';
import { useStyles } from './StationInputSection.style';
import Autocomplete from 'lib/ui/components/inputs/Autocomplete/Autocomplete';
import SwapButtonContainer from '../SwapButton/SwapButtonContainer';

const StationInputSection = ({
  selectedFromStation,
  selectedToStation,
  fromStations,
  toStations,
  onSelectFrom,
  onSelectTo,
}: StationInputSectionProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.section} elevation={2}>
      <Box display="flex">
        <Box display="flex" alignItems="center" marginRight={2}>
          <SwapButtonContainer />
        </Box>
        <Box width="100%">
          <Box marginBottom={2}>
            <Autocomplete
              disableClearable={true}
              options={fromStations}
              value={selectedFromStation}
              label="From"
              onSelect={onSelectFrom}
            />
          </Box>
          <Box>
            <Autocomplete
              disableClearable={true}
              options={toStations}
              value={selectedToStation}
              label="To"
              onSelect={onSelectTo}
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default StationInputSection;
