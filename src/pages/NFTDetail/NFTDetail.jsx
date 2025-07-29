
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { resolveImageUrl } from "../../utils/FormatImageUrl"; 
import { ApiKey } from "../../services/Api"; 
import { NFT_COLLECTION } from "../../services/Api";
import "./NFTDetail.css";

const NFTDetail = () => {
  const { id } = useParams();
  const [nft, setNFT] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchNFT = async () => {
const MORALIS_API_KEY = ApiKey;

    try {
      const res = await axios.get(
        `https://deep-index.moralis.io/api/v2/nft/${NFT_COLLECTION}/${id}?chain=eth&format=decimal`,
        {
          headers: {
            "X-API-Key":MORALIS_API_KEY,
          },
        }
      );

      const metadata = res.data.metadata
        ? JSON.parse(res.data.metadata)
        : {};

      setNFT({
        ...res.data,
        metadata,
      });

      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch NFT:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNFT();
  }, [id]);

  if (loading) return <div className="nft-detail"><p>Loading...</p></div>;
  if (!nft) return <Link to="/explore" className="back-lin"> <p>NFT not found 🫠</p>← Back to Explore
  </Link> ;
 const metadata = typeof nft.metadata === "string" ? JSON.parse(nft.metadata) : nft.metadata;
 const image = resolveImageUrl(metadata?.image);
  return (
    <div className="nft-detail">
      <Link to="/explore" className="back-link">← Back to Explore</Link>
      <div className="nft-content">
        <img src={resolveImageUrl(metadata?.image)} alt={nft.metadata?.name || "NFT"} />
        <div className="nft-info">
          <h2>{nft.metadata?.name || "Unnamed NFT"}</h2>
          <p><strong>Description:</strong> {nft.metadata?.description || "No description available."}</p>
          <p><strong>Token ID:</strong> {nft.token_id}</p>
          <p><strong>Contract:</strong> {nft.token_address}</p>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;

