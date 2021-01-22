import React from 'react';
import { Container } from '@material-ui/core';
import { PageProps } from './Page.types';
import { getMaxWidth } from './Page.options';
import { useStyles } from './Page.style';

const Page = ({ widthConstraintType = 'MEDIUM', children }: PageProps) => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth={getMaxWidth(widthConstraintType)}>
      {children}
    </Container>
  );
};

export default Page;
