import React from 'react';
import TextField from '@material-ui/core/TextField';
import MaterialUiAutocomplete from '@material-ui/lab/Autocomplete';
import { AutocompleteProps } from './Autocomplete.types';

const Autocomplete = ({ options, label, disableClearable = false }: AutocompleteProps) => {
  return (
    <MaterialUiAutocomplete
      options={options}
      disableClearable={disableClearable}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default Autocomplete;
