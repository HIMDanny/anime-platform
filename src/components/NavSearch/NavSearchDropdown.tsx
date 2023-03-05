import type Anime from '../../types/Anime';
import LoadingSpinner from '../LoadingSpinner';
import SearchCard from './SearchCard';

export type NavSearchDropdownProps = {
  items: Anime[] | undefined;
};

const DropdownContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props,
) => (
  <div
    className={`absolute top-12 max-h-[500px] w-1/2 overflow-y-auto bg-gray-900 p-2 ${props.className}`}
  >
    {props.children}
  </div>
);

const NavSearchDropdown = ({ items }: NavSearchDropdownProps) => {
  let dropdownContent;
  if (typeof items === 'undefined') {
    return (
      <DropdownContainer className="p-3">
        <LoadingSpinner
          size="lg"
          className="text-center"
        />
      </DropdownContainer>
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

  return <DropdownContainer>{dropdownContent}</DropdownContainer>;
};
export default NavSearchDropdown;
