import React from 'react';
import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';

const ConnectWalletButton = () => {
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  return (
    <button
      onClick={openConnectModal}
      style={{
        padding: '10px 5px',
        fontSize: '16px',
        backgroundColor: '#3171faff',
        color: '#fff',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
      }}
    >
      {isConnected
        ? `${address.slice(0, 6)}...${address.slice(-4)}`
        : 'Connect Wallet'}
    </button>
  );
};

export default ConnectWalletButton;
