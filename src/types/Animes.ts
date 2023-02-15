import Anime from './Anime';

type Meta = {
  count: number;
};

type Links = {
  first: string;
  prev?: string;
  next: string;
  last: string;
};

type Animes = {
  data: Anime[];
  meta: Meta;
  links: Links;
};

export default Animes;
