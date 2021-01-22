import React from 'react';
import { IconButton } from '@material-ui/core';
import { SwapButtonProps } from './SwapButton.types';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import { useStyles } from './SwapButton.style';

const SwapButton = ({ onClickSwap }: SwapButtonProps) => {
  const classes = useStyles();
  return (
    <IconButton className={classes.button} onClick={onClickSwap}>
      <SwapVertIcon fontSize="large" color="primary" />
    </IconButton>
  );
};

export default SwapButton;
