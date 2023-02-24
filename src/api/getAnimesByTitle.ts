import debounce from '../utils/debounce';
import axios from './axios';

const getAnimesByTitle = async (title: string) => {
  try {
    const { data } = await axios.get(`anime?filter[text]=${title}`);
    console.log(data);

    return data;
  } catch (error: any) {
    console.error(error.response.data.errors);
  }
};

export default debounce(getAnimesByTitle, 300);
