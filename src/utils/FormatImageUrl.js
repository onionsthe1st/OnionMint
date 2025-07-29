import fall from '../assets/nfts/2.png'

export const resolveImageUrl = (url) => {
  if (typeof url !== "string" || !url.trim()) {
    return fall; 
  }

  if (url.startsWith("ipfs://")) {
    return url.replace("ipfs://", "https://ipfs.io/ipfs/");
  }

  return url;
};

