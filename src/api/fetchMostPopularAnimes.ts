import axios from './axios';

const fetchMostPopularAnimes = async () => {
  try {
    const { data } = await axios.get('anime?sort=popularityRank&page[limit]=8');

    return data;
  } catch (error: any) {
    console.error(error.response.data.errors);
  }
};

export default fetchMostPopularAnimes;
