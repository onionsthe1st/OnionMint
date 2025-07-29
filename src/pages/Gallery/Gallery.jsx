
import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { fetchNFTs } from '../../services/MoralisApi';
import './Gallery.css'
import Oni from '../../assets/nfts/2.png'
import Onio from '../../assets/nfts/3.png'
import Onion from '../../assets/nfts/4.png'
import Onions from '../../assets/nfts/5.png'
import Onionss from '../../assets/nfts/1.png'
import Onionsss from '../../assets/nfts/11.png'
import Onionssss from '../../assets/nfts/8.png'

function Gallery() {

  const mockNFTs = [
  {
    id: 1,
    name: "Onion",
    image: Onio,
    description: "A rare onion warrior from the blockchain.",
  },
  {
    id: 2,
    name: "HIM",
    image: Onion,
    description: "Ripened in the metaverse.",
  },
  {
    id: 3,
    name: 'mafia boss',
    image: Oni,
    description: "Grown on-chain with zero gas.",
  },

    {
    id: 4,
    name: "Mafia",
    image: Onionss,
    description: "Grown on-chain with zero gas.",
  },

    {
    id: 5,
    name: "Mob",
    image: Onionsss,
    description: "Grown on-chain with zero gas.",
  },

    {
    id: 6,
    name: "Cyber Yam",
    image: Onionssss,
    description: "Grown on-chain with zero gas.",
  },
];

  const { address, isConnected } = useAccount();
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (isConnected) {
      fetchNFTs(address).then(setNfts);
    }
  }, [address, isConnected]);

  return (
    <>
    <div className="gallery">
      <h2>Website NFTs</h2>
       <div className="nft-grid">
        {mockNFTs.map((nft) => (
          <div className="nft-card" key={nft.id}>
            <img src={nft.image} alt={nft.name} />
            <h3>{nft.name}</h3>
            <p>{nft.description}</p>
          </div>
        ))}
      </div>
    </div>



    <div className="gallery">
      <h2>Your NFTs</h2>
      <div className="nft-grid">
        {nfts.length === 0 ? (
          <p>No NFTs found or not connected.</p>
        ) : (
          nfts.map(nft => (
            <div key={nft.token_id} className="nft-card">
              <img src={nft.image || nft.metadata?.image || 'https://via.placeholder.com/200'} alt={nft.name} />
              <h3>{nft.name || 'Unnamed NFT'}</h3>
              <p>{nft.token_address.slice(0, 6)}...{nft.token_address.slice(-4)}</p>
            </div>
          ))
        )}
      </div>
    </div>

    
    </>
  );
}

export default Gallery;
