import React from 'react'
import Onion from '../../assets/nfts/10.png'
import './Home.css'
import { Link } from 'react-router-dom'
import Gallery from '../Gallery/Gallery'
import Oni from '../../assets/nfts/2.png'
import Onio from '../../assets/nfts/3.png'
// import Onion from '../../assets/nfts/4.png'
import Onions from '../../assets/nfts/5.png'
import Onionss from '../../assets/nfts/1.png'
import Onionsss from '../../assets/nfts/11.png'
import Onionssss from '../../assets/nfts/8.png'
function Home() {

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
  return (
    <>
      <div className='hero'>
  <div className='welcome'>
    <h1>Welcome to OnionMint</h1>
    <h2>Your NFT Gallery</h2>
      <p>
        Discover, collect, and showcase your NFTs like never before. 
        Dive into a world of decentralized art, creativity, 
        and uniqueness, all in one place.
      </p>
    <div className="ex">
      <Link to='/explore' className='Home-explore'> Explore</Link>
    </div>
  </div>

  <div>
    <img src={Onion} alt="Hero Onion" />
  </div>
</div>

<div className="about">
  
        <h2>Own an NFT?</h2>
        <p>View and manage your collection with ease.</p>
        <h3>Check your gallery <Link className='here' to='/gallery'>here</Link></h3>

  {/* <h2>What is OnionMint?</h2> */}
  {/* <p>
    OnionMint is a playful, decentralized NFT gallery built to help you , explore, and vibe with unique digital art across chains. No tears, just fresh NFTs.
  </p> */}
</div>

<div className="features">
  <h2>Why OnionMint?</h2>
  <br />
  <ul>
    <li> Explore handpicked collections</li>
    <li> Compatible with multiple wallets</li>
    <li> Built for speed and vibes</li>
  </ul>
</div>

<div className="preview-gallery">
  <h2>Explore a Few Hot NFTs</h2>
  <div className="nft-grid">
   
    {mockNFTs.slice(0, 4).map(nft => (
      <div key={nft.id} className="nft-card">
        <img src={nft.image} alt={nft.name} />
        <h3>{nft.name}</h3>
        <p>{nft.description}</p>
      </div>
    ))}
  </div>
</div>



<div className="cta">
  <h2>Ready to mint your vibe?</h2>
  <Link to="/explore" className="cta-button">Start Exploring</Link>
</div>


    </>
  )
}


export default Home
