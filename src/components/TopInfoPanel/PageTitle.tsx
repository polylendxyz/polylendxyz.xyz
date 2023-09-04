import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';

import { NetworkConfig } from '../../ui-config/networksConfig';

export interface PageTitleProps extends Pick<NetworkConfig, 'bridge'> {
  pageTitle?: ReactNode;
  pageDescription?: ReactNode;
  withMarketSwitcher?: boolean;
  withMigrateButton?: boolean;
}

export const PageTitle = ({ pageTitle, pageDescription }: PageTitleProps) => {
  const theme = useTheme();
  const upToLG = useMediaQuery(theme.breakpoints.up('lg'));
  // const upToMD = useMediaQuery(theme.breakpoints.up('md'));
  const downToXSM = useMediaQuery(theme.breakpoints.down('xsm'));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        mb: pageTitle ? 4 : 0,
        flexDirection: 'column',
      }}
    >
      {pageTitle && (
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <Typography
            variant={downToXSM ? 'h2' : upToLG ? 'display1' : 'h1'}
            sx={{
              color: 'text.white',
              mr: { xs: 5, xsm: 3 },
              mb: { xs: 1, xsm: 0 },
            }}
          >
            {pageTitle}
          </Typography>
        </Box>
      )}
      {pageDescription && (
        <Box sx={{ display: 'flex', alignItems: 'flex-start', maxWidth: 750 }}>
          <Typography
            variant="description"
            sx={{
              color: 'text.muted',
              mr: { xs: 5, xsm: 3 },
              mb: { xs: 1, xsm: 0 },
            }}
          >
            {pageDescription}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
