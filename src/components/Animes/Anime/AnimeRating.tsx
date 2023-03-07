import classNames from 'classnames';

export type AnimeRatingProps = {
  rating: string;
};

const AnimeRating: React.FC<AnimeRatingProps> = ({ rating }) => {
  return (
    <div className="mt-2 text-sm">
      <span className="font-bold">Rating: </span>
      <span
        className={classNames(
          { 'text-red-600': +rating >= 0 && +rating < 50 },
          { 'text-yellow-600': +rating >= 50 && +rating < 80 },
          { 'text-green-600': +rating >= 80 },
        )}
      >
        {rating}
      </span>
    </div>
  );
};
export default AnimeRating;
