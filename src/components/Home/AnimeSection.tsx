import AnimeList, { type AnimeListProps } from '../Animes/AnimeList';

export type AnimeSectionProps = {
  title: string;
  animes: AnimeListProps['animes'];
};

const AnimeSection: React.FC<AnimeSectionProps> = ({ title, animes }) => {
  return (
    <section className="mt-6">
      <h2 className="mb-4 text-3xl font-bold">{title}</h2>
      <AnimeList animes={animes} />
    </section>
  );
};
export default AnimeSection;
