import React from 'react';
import { Box, Paper } from '@material-ui/core';
import { StationInputSectionProps } from './StationInputSection.types';
import { useStyles } from './StationInputSection.style';
import Autocomplete from 'lib/ui/components/inputs/Autocomplete/Autocomplete';

const StationInputSection = ({
  fromStations,
  toStations,
  onSelectFrom,
  onSelectTo,
}: StationInputSectionProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.section} elevation={2}>
      <Box marginBottom={2}>
        <Autocomplete
          disableClearable={true}
          options={fromStations}
          label="From"
          onSelect={onSelectFrom}
        />
      </Box>
      <Box>
        <Autocomplete
          disableClearable={true}
          options={toStations}
          label="To"
          onSelect={onSelectTo}
        />
      </Box>
    </Paper>
  );
};

export default StationInputSection;
