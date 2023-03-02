import type Anime from '../../types/Anime';
import SearchCard from './SearchCard';

export type NavSearchDropdownProps = {
  items: Anime[] | undefined;
};

const NavSearchDropdown = ({ items }: NavSearchDropdownProps) => {
  let dropdownContent;
  if (typeof items === 'undefined') {
    return null;
  }

  if (items.length === 0) {
    dropdownContent = <p className="text-center">No items found.</p>;
  }

  dropdownContent = items.map(({ id, attributes }) => (
    <SearchCard
      key={id}
      id={id}
      attributes={attributes}
    />
  ));

  return (
    <div className="absolute top-12 w-full bg-gray-900 p-2">
      {dropdownContent}
    </div>
  );
};
export default NavSearchDropdown;
