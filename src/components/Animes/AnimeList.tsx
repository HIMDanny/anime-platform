import AnimeItem from '../Animes/Anime/AnimeItem';
import type Anime from '../../types/Anime';

export type AnimeListProps = {
  animes: Anime[];
};

const AnimeList: React.FC<AnimeListProps> = ({ animes }) => {
  const animeItems = animes.map(({ id, attributes }: Anime) => (
    <AnimeItem
      key={id}
      id={id}
      attributes={attributes}
    />
  ));

  return <ul className="flex gap-4">{animeItems}</ul>;
};
export default AnimeList;
