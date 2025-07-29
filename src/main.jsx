import React from 'react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  getDefaultConfig,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import {
  mainnet,
  polygon,
  arbitrum,
  sepolia,
  goerli,
  linea,
  base,
  sei
} from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';

import App from './App';

const config = getDefaultConfig({
  appName: 'OnionMint',
  projectId: '717ceb2af905d19d7fad75e9949d7c56',
  chains: [mainnet, polygon, arbitrum,sepolia,goerli,linea, base,sei],
  ssr: false,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
         <RainbowKitProvider>
            <App />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </BrowserRouter>
  </StrictMode>
);
