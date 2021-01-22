import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Page from 'lib/ui/components/layout/Page/Page';
import StationInputSectionContainer from 'ui/travel/components/from-to/StationInputSection/StationInputSectionContainer';
import TimelineSectionContainer from 'ui/travel/components/route-suggestion/TimelineSection/TimelineSectionContainer';

/**
 * Entry point of the application
 */
const Application = () => {
  return (
    <Page widthConstraintType="TIGHT">
      <Box display="flex" flexDirection="column" height="100%">
        <Box padding={4}>
          <StationInputSectionContainer />
        </Box>
        <Box padding={0} paddingBottom={4}>
          <TimelineSectionContainer />
        </Box>
        <Box textAlign="center" paddingBottom={4}>
          <Typography variant="subtitle2">
            Made with{' '}
            <span role="img" aria-label="love">
              ❤️
            </span>{' '}
            by Natasha Koh
          </Typography>
        </Box>
      </Box>
    </Page>
  );
};

export default Application;
