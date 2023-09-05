import { ReactNode } from 'react';

// Enable for premissioned market
// import { PermissionView } from 'src/components/transactions/FlowCommons/PermissionView';

export type MarketDataType = {
  v3?: boolean;
  marketTitle: string;
  // the network the market operates on
  chainId: number;
  enabledFeatures?: {
    liquiditySwap?: boolean;
    staking?: boolean;
    governance?: boolean;
    faucet?: boolean;
    collateralRepay?: boolean;
    incentives?: boolean;
    permissions?: boolean;
    debtSwitch?: boolean;
    withdrawAndSwitch?: boolean;
  };
  isFork?: boolean;
  permissionComponent?: ReactNode;
  disableCharts?: boolean;
  subgraphUrl?: string;
  addresses: {
    LENDING_POOL_ADDRESS_PROVIDER: string;
    LENDING_POOL: string;
    WETH_GATEWAY?: string;
    SWAP_COLLATERAL_ADAPTER?: string;
    REPAY_WITH_COLLATERAL_ADAPTER?: string;
    DEBT_SWITCH_ADAPTER?: string;
    WITHDRAW_SWITCH_ADAPTER?: string;
    FAUCET?: string;
    PERMISSION_MANAGER?: string;
    WALLET_BALANCE_PROVIDER: string;
    L2_ENCODER?: string;
    UI_POOL_DATA_PROVIDER: string;
    UI_INCENTIVE_DATA_PROVIDER?: string;
    COLLECTOR?: string;
    V3_MIGRATOR?: string;
    GHO_TOKEN_ADDRESS?: string;
    GHO_UI_DATA_PROVIDER?: string;
  };
  /**
   * https://www.hal.xyz/ has integrated aave for healtfactor warning notification
   * the integration doesn't follow aave market naming & only supports a subset of markets.
   * When a halIntegration is specified a link to hal will be displayed on the ui.
   */
  halIntegration?: {
    URL: string;
    marketName: string;
  };
};

export enum CustomMarket {
  proto_zkevm = 'proto_zkevm',
}

export const marketsData: {
  [key in keyof typeof CustomMarket]: MarketDataType;
} = {
  [CustomMarket.proto_zkevm]: {
    marketTitle: 'Polygon zkEVM',
    chainId: 1101,
    v3: true,
    enabledFeatures: {
      governance: false,
      staking: false,
      liquiditySwap: false,
      collateralRepay: false,
      incentives: true,
      withdrawAndSwitch: false,
      debtSwitch: false,
    },
    // subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3',
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0x2B268382D13365d241886098a3dD45D20F5FEc2D',
      LENDING_POOL: '0xC37607d4F73385B35f6c3ec16f63DE0eBC73DC86',
      WETH_GATEWAY: '0x4A018E52478d8b28B907B35E9E81dDF2b715e1A7',
      WALLET_BALANCE_PROVIDER: '0x67Fd2B99D6D54badC09a6892E32eC978f91F5563',
      UI_POOL_DATA_PROVIDER: '0x3E7Ae28325dE809F15599268bC560B755ebdCB5e',
      UI_INCENTIVE_DATA_PROVIDER: '0x6F9D8B0F038aBe5C4Cb10D96471AfF1F37B85E21',
    },
  },
} as const;
