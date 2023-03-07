import { useLoaderData } from 'react-router-dom';
import fetchTrendingAnimes from '../api/fetchTrendingAnimes';
import AnimeCard from '../components/Animes/Anime/AnimeItem';
import Anime from '../types/Anime';

type TrendingAnimes = {
  trendingAnimes: Anime[];
};

export const loader = async (): Promise<TrendingAnimes> => {
  const { data: trendingAnimes } = await fetchTrendingAnimes();

  return { trendingAnimes };
};

const Home = () => {
  const { trendingAnimes } = useLoaderData() as TrendingAnimes;

  return (
    <div className="container mx-auto mt-4 flex gap-4">
      {trendingAnimes.map(({ id, attributes }: Anime) => (
        <AnimeCard
          key={id}
          id={id}
          attributes={attributes}
        />
      ))}
    </div>
  );
};
export default Home;
