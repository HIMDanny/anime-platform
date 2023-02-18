type Relationships = {
  genres: Genres;
  categories: Genres;
  castings: Genres;
  installments: Genres;
  mappings: Genres;
  reviews: Genres;
  mediaRelationships: Genres;
  characters: Genres;
  staff: Genres;
  productions: Genres;
  quotes: Genres;
  episodes: Genres;
  streamingLinks: Genres;
  animeProductions: Genres;
  animeCharacters: Genres;
  animeStaff: Genres;
};

type Genres = {
  links: GenreLinks;
};

export type Attributes = {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  description: string;
  coverImageTopOffset: number;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  ratingFrequencies: RatingFrequencies;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string;
  nextRelease?: string;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: Subtype;
  status: string;
  tba?: string;
  posterImage: PosterImage;
  coverImage: CoverImage;
  episodeCount: number;
  episodeLength: number;
  totalLength: number;
  youtubeVideoId: string;
  showType?: Subtype;
  nsfw: boolean;
};

type CoverImage = {
  tiny: string;
  large: string;
  small: string;
  original: string;
  meta: ImageMeta;
};

type ImageMeta = {
  dimensions: ImageDimensions;
};

type ImageDimensions = {
  tiny: Sizings;
  large: Sizings;
  small: Sizings;
};

type PosterImage = {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
  meta: Meta;
};

type Meta = {
  dimensions: Dimensions;
};

type Dimensions = {
  tiny: Sizings;
  large: Sizings;
  small: Sizings;
  medium: Sizings;
};

type Sizings = {
  width: number;
  height: number;
};

type RatingFrequencies = {
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
  '14': string;
  '15': string;
  '16': string;
  '17': string;
  '18': string;
  '19': string;
  '20': string;
};

type Subtype = 'ONA' | 'OVA' | 'TV' | 'movie' | 'music' | 'special';

type Titles = {
  en: string;
  en_jp: string;
  ja_jp: string;
};

type Links = {
  self: string;
};

type GenreLinks = Links & {
  related: string;
};

type Anime = {
  id: string;
  type: string;
  links: Links;
  attributes: Attributes;
  relationships: Relationships;
};

export default Anime;
