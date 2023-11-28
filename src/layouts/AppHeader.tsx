import { Slide, useMediaQuery, useScrollTrigger, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRootStore } from 'src/store/root';

import { NavItems } from './components/NavItems';
import { MobileMenu } from './MobileMenu';
import { SettingsMenu } from './SettingsMenu';
import WalletWidget from './WalletWidget';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll({ children }: Props) {
  const { breakpoints } = useTheme();
  const md = useMediaQuery(breakpoints.down('md'));
  const trigger = useScrollTrigger({ threshold: md ? 160 : 80 });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function AppHeader() {
  const { breakpoints } = useTheme();
  const md = useMediaQuery(breakpoints.down('md'));

  const [mobileDrawerOpen, setMobileDrawerOpen] = useRootStore((state) => [
    state.mobileDrawerOpen,
    state.setMobileDrawerOpen,
  ]);

  const [walletWidgetOpen, setWalletWidgetOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileDrawerOpen && !md) {
      setMobileDrawerOpen(false);
    }
    if (walletWidgetOpen) {
      setWalletWidgetOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [md]);

  const headerHeight = 48;

  const toggleWalletWigit = (state: boolean) => {
    if (md) setMobileDrawerOpen(state);
    setWalletWidgetOpen(state);
  };

  const toggleMobileMenu = (state: boolean) => {
    if (md) setMobileDrawerOpen(state);
    setMobileMenuOpen(state);
  };

  return (
    <HideOnScroll>
      <Box>
        <div style={{ textAlign: 'center', backgroundColor: '#cc3300', color: '#fff', padding: 5 }}>
          Protocol has been compromised due to a flash loan attack. Please do not deposit any funds.
          You can withdraw funds or repay borrows.
        </div>

        <Box
          component="header"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          sx={(theme) => ({
            height: headerHeight,
            position: 'sticky',
            top: 0,
            transition: theme.transitions.create('top'),
            zIndex: theme.zIndex.appBar,
            bgcolor: theme.palette.background.header,
            padding: {
              xs: mobileMenuOpen || walletWidgetOpen ? '8px 20px' : '8px 8px 8px 20px',
              xsm: '8px 20px',
            },
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'space-between',
            boxShadow: 'inset 0px -1px 0px rgba(242, 243, 247, 0.16)',
          })}
        >
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <NavItems />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {!mobileMenuOpen && (
            <WalletWidget
              open={walletWidgetOpen}
              setOpen={toggleWalletWigit}
              headerHeight={headerHeight}
            />
          )}

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <SettingsMenu />
          </Box>

          {!walletWidgetOpen && (
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <MobileMenu
                open={mobileMenuOpen}
                setOpen={toggleMobileMenu}
                headerHeight={headerHeight}
              />
            </Box>
          )}
        </Box>
      </Box>
    </HideOnScroll>
  );
}
