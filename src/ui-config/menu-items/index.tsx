import { BookOpenIcon, CreditCardIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { t } from '@lingui/macro';
import { ReactNode } from 'react';
import { ROUTES } from 'src/components/primitives/Link';

import { MarketDataType } from '../marketsConfig';

interface Navigation {
  link: string;
  title: string;
  isVisible?: (data: MarketDataType) => boolean | undefined;
  dataCy?: string;
}

export const navigation: Navigation[] = [
  {
    link: ROUTES.markets,
    title: `Welcome`,
    dataCy: 'menuMarkets',
  },
  {
    link: ROUTES.dashboard,
    title: t`Dashboard`,
    dataCy: 'menuDashboard',
  },
  {
    link: 'https://discord.gg/kYz7QBPXN7',
    title: t`Discord`,
    dataCy: 'menuDiscord',
  },
  // {
  //   link: 'https://docs.polylend.xyz/security',
  //   title: t`Security`,
  //   dataCy: 'menuDocs',
  // },
];

interface MoreMenuItem extends Navigation {
  icon: ReactNode;
  makeLink?: (walletAddress: string) => string;
}

const moreMenuItems: MoreMenuItem[] = [
  {
    link: 'https://docs.aave.com/faq/',
    title: t`FAQ`,
    icon: <QuestionMarkCircleIcon />,
  },
  {
    link: 'https://docs.aave.com/portal/',
    title: t`Developers`,
    icon: <BookOpenIcon />,
  },
];

const fiatEnabled = process.env.NEXT_PUBLIC_FIAT_ON_RAMP;
if (fiatEnabled === 'true') {
  moreMenuItems.push({
    link: 'https://global.transak.com',
    makeLink: (walletAddress) =>
      `${process.env.NEXT_PUBLIC_TRANSAK_APP_URL}/?apiKey=${process.env.NEXT_PUBLIC_TRANSAK_API_KEY}&walletAddress=${walletAddress}&disableWalletAddressForm=true`,
    title: t`Buy Crypto With Fiat`,
    icon: <CreditCardIcon />,
  });
}
export const moreNavigation: MoreMenuItem[] = [...moreMenuItems];
