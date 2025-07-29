
import React, { useEffect, useState } from "react";
import axios from "axios";
 import { resolveImageUrl } from "../../utils/FormatImageUrl"; // fallback image handler
import { Link } from "react-router-dom";
import "./Explore.css";
import { ApiKey } from "../../services/Api";
import { NFT_COLLECTION } from "../../services/Api";

const Explore = () => {
  const [nfts, setNFTs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNFTs = async () => {

    const MORALIS_API_KEY = ApiKey
    try {
      const res = await axios.get(
        `https://deep-index.moralis.io/api/v2/nft/${NFT_COLLECTION}?chain=eth&format=decimal&limit=10`,
        {
          headers: {
            "X-API-Key":MORALIS_API_KEY,
          },
        }
      );

      const filtered = res.data.result.filter(nft =>
        nft.metadata || nft.image
      );

      setNFTs(filtered);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching NFTs", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  return (
    <div className="explore-page">
      <h1>Explore NFTs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
     <div className="explore-grid">
  {nfts.map((nft, i) => {
    const metadata = typeof nft.metadata === "string" ? JSON.parse(nft.metadata) : nft.metadata;
    const image = resolveImageUrl(metadata?.image);

    return (
      <Link to={`/nft/${nft.token_id}`} key={i} className="explore-card">
        <img src={image} alt={metadata?.name || "NFT"} />
        <h3>{metadata?.name || "Unnamed"}</h3>
        <p>{nft.token_address.slice(0, 6)}...{nft.token_address.slice(-4)}</p>
      </Link>
    );
  })}
</div>

      )}
    </div>
  );
};

export default Explore;

