import { useLoaderData } from 'react-router-dom';
import fetchMostPopularAnimes from '../api/fetchMostPopularAnimes';
import fetchTrendingAnimes from '../api/fetchTrendingAnimes';
import AnimeSection, {
  type AnimeSectionProps,
} from '../components/Home/AnimeSection';

type HomeLoaderData = {
  trendingAnimes: AnimeSectionProps['animes'];
  mostPopularAnimes: AnimeSectionProps['animes'];
};

export const loader = async (): Promise<HomeLoaderData> => {
  const [trendingData, mostPopularData] = await Promise.all([
    fetchTrendingAnimes(),
    fetchMostPopularAnimes(),
  ]);

  return {
    trendingAnimes: trendingData.data,
    mostPopularAnimes: mostPopularData.data,
  };
};

const Home = () => {
  const { trendingAnimes, mostPopularAnimes } =
    useLoaderData() as HomeLoaderData;

  return (
    <div className="container mx-auto">
      <AnimeSection
        title="Trending"
        animes={trendingAnimes}
      />

      <AnimeSection
        title="Most popular anime"
        animes={mostPopularAnimes}
      />
    </div>
  );
};
export default Home;
