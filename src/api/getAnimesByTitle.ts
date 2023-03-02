import type Animes from '../types/Animes';
import axios from './axios';

const getAnimesByTitle = async (title: string) => {
  try {
    const { data } = await axios.get(`anime?filter[text]=${title}`);

    return data as Animes;
  } catch (error: any) {
    console.error(error.response.data.errors);
  }
};

export default getAnimesByTitle;
