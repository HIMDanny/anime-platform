import axios from './axios';

const getAnimeGenres = async (id: string) => {
  try {
    const { data } = await axios.get(`anime/${id}/genres`);

    return data;
  } catch (error: any) {
    console.error(error.response.data.errors);
  }
};

export default getAnimeGenres;
