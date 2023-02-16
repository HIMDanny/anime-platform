import { useLoaderData } from 'react-router-dom';
import fetchTrendingAnimes from '../api/fetchTrendingAnimes';
import AnimeCard from '../components/AnimeCard';
import Anime from '../types/Anime';

type TrendingAnimes = {
  trendingAnimes: Anime[];
};

export const loader = async (): Promise<TrendingAnimes> => {
  const { data } = await fetchTrendingAnimes();

  return { trendingAnimes: data };
};

const Home = () => {
  const { trendingAnimes } = useLoaderData() as TrendingAnimes;
  console.log(trendingAnimes);

  return (
    <div className="flex gap-4">
      {trendingAnimes
        .slice(0, 3)
        .map(
          ({
            id,
            attributes: { titles, posterImage, subtype, description },
          }: Anime) => (
            <AnimeCard
              key={id}
              id={id}
              title={titles.en ?? titles.en_jp}
              thumbnail={posterImage.medium}
              type={subtype}
              description={description}
            />
          ),
        )}
    </div>
  );
};
export default Home;
