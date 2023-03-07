import axios from './axios';

const fetchTrendingAnimes = async () => {
  try {
    const { data } = await axios.get('trending/anime?limit=8');

    return data;
  } catch (error: any) {
    console.error(error.response.data.errors);
  }
};

export default fetchTrendingAnimes;
