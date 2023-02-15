import instance from './axios';

const fetchTrendingAnimes = async () => {
  try {
    const { data } = await instance.get('trending/anime');

    return data;
  } catch (error: any) {
    console.error(error.response.data.errors);
  }
};

export default fetchTrendingAnimes;
