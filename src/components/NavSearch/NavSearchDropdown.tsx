import type Anime from '../../types/Anime';
import LoadingSpinner from '../LoadingSpinner';
import SearchCard from './SearchCard';

export type NavSearchDropdownProps = {
  items: Anime[] | undefined;
};

const NavSearchDropdown = ({ items }: NavSearchDropdownProps) => {
  let dropdownContent;
  if (typeof items === 'undefined') {
    return (
      <div className="absolute top-12 w-1/2 bg-gray-900 p-3">
        <LoadingSpinner
          size="lg"
          className="text-center"
        />
      </div>
    );
  }

  dropdownContent = <p className="text-center">No items found.</p>;

  if (items.length > 0) {
    dropdownContent = items.map(({ id, attributes }) => (
      <SearchCard
        key={id}
        id={id}
        attributes={attributes}
      />
    ));
  }

  return (
    <div className="absolute top-12 w-1/2 bg-gray-900 p-2">
      {dropdownContent}
    </div>
  );
};
export default NavSearchDropdown;
