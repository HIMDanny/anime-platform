import { useLoaderData } from 'react-router-dom';
import fetchTrendingAnimes from '../api/fetchTrendingAnimes';
import AnimeSection, {
  type AnimeSectionProps,
} from '../components/Home/AnimeSection';

type HomeLoaderData = {
  trendingAnimes: AnimeSectionProps['animes'];
};

export const loader = async (): Promise<HomeLoaderData> => {
  const { data: trendingAnimes } = await fetchTrendingAnimes();

  return { trendingAnimes };
};

const Home = () => {
  const { trendingAnimes } = useLoaderData() as HomeLoaderData;

  return (
    <div className="container mx-auto">
      <AnimeSection
        title="Trending"
        animes={trendingAnimes}
      />
    </div>
  );
};
export default Home;
