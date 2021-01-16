import React from 'react';
import { Container } from '@material-ui/core';
import { PageProps } from './Page.types';
import { getMaxWidth } from './Page.options';

const Page = ({ widthConstraintType = 'MEDIUM', children }: PageProps) => {
  return <Container maxWidth={getMaxWidth(widthConstraintType)}>{children}</Container>;
};

export default Page;
