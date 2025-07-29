import { ApiKey } from './Api';
import axios from 'axios';

const MORALIS_API_KEY = ApiKey;

export const fetchNFTs = async (walletAddress, chain = 'eth') => {
  try {
    const response = await axios.get(
      `https://deep-index.moralis.io/api/v2.2/${walletAddress}/nft`,
      {
        params: { chain },
        headers: {
          'X-API-Key': MORALIS_API_KEY,
        },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch NFTs:', error);
    return [];
  }
};
