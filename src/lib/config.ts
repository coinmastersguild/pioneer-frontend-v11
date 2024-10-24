'use client';

import { http, createStorage, cookieStorage } from 'wagmi';
import { mainnet, base } from 'wagmi/chains';
import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';

const projectId = "c6c9bacd35afa3eb9e6cccf6d8464395";

const supportedChains: Chain[] = [ mainnet, base ];

export const config = getDefaultConfig({
   appName: "WalletConnection",
   projectId,
   chains: supportedChains as any,
   ssr: true,
   storage: createStorage({
    storage: cookieStorage,
   }),
  transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
 });
