import instance from './axios';

const fetchAllAnimes = async () => {
  try {
    const { data } = await instance.get('anime');
    return data;
  } catch (error: any) {
    console.error(error.response.data.errors);
  }
};

export default fetchAllAnimes;
