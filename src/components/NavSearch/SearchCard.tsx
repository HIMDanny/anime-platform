import { type Attributes } from '../../types/Anime';

export type SearchCardProps = {
  id: string;
  attributes: Attributes;
};

const SearchCard = ({ id, attributes }: SearchCardProps) => {
  return <div>{attributes.titles.en}</div>;
};
export default SearchCard;
