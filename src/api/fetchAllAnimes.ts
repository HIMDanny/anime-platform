import axios from './axios';

const fetchAllAnimes = async () => {
  try {
    const { data } = await axios.get('anime');
    return data;
  } catch (error: any) {
    console.error(error.response.data.errors);
  }
};

export default fetchAllAnimes;
