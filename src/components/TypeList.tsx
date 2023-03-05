import { type Attributes } from '../types/Anime';
import StatusBadge from './StatusBadge';

export type TypeListProps = {
  attributes: Attributes;
  className?: HTMLDivElement['className'];
};

const TypeList: React.FC<TypeListProps> = ({ attributes, className }) => {
  return (
    <div className={className}>
      <span className="font-bold">Type</span>:{' '}
      <div className="inline-block">
        <span className="ml-2 mr-2">{attributes.subtype}</span>{' '}
        <span className="ml-1 mr-2">
          {attributes?.startDate?.split('-')[0]}
        </span>{' '}
        {attributes.ageRating !== '' && (
          <span className="ml-1 mr-2">{attributes.ageRating}</span>
        )}{' '}
        <StatusBadge
          status={attributes.status}
          className="ml-1 mr-2 text-xs"
        />
      </div>
    </div>
  );
};
export default TypeList;
