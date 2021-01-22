import React from 'react';
import { Box, Paper } from '@material-ui/core';
import { StationInputSectionProps } from './StationInputSection.types';
import { useStyles } from './StationInputSection.style';
import Autocomplete from 'lib/ui/components/inputs/Autocomplete/Autocomplete';

const StationInputSection = ({ stations }: StationInputSectionProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.section} elevation={2}>
      <Box marginBottom={2}>
        <Autocomplete disableClearable={true} options={stations} label="From" />
      </Box>
      <Box>
        <Autocomplete disableClearable={true} options={stations} label="To" />
      </Box>
    </Paper>
  );
};

export default StationInputSection;
