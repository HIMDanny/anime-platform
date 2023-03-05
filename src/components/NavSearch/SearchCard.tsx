import { type Attributes } from '../../types/Anime';
import TypeList from '../TypeList';

export type SearchCardProps = {
  id: string;
  attributes: Attributes;
};

// TODO: add routing to page
const SearchCard = ({ id, attributes }: SearchCardProps) => {
  const title =
    attributes.titles.en ?? attributes.titles.en_jp ?? attributes.titles.en_us;

  return (
    <div className="flex gap-2 py-1 px-1">
      <img
        className="w-14"
        src={attributes.posterImage.tiny}
        alt={title}
      />
      <div>
        <p>{title}</p>
        <TypeList
          className="mt-2"
          attributes={attributes}
        />
      </div>
    </div>
  );
};
export default SearchCard;
