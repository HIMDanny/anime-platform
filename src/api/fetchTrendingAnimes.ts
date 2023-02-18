import axios from './axios';

const fetchTrendingAnimes = async () => {
  try {
    const { data } = await axios.get('trending/anime?limit=5');

    return data;
  } catch (error: any) {
    console.error(error.response.data.errors);
  }
};

export default fetchTrendingAnimes;
