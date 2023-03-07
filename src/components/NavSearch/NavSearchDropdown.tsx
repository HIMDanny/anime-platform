import type Anime from '../../types/Anime';
import LoadingSpinner from '../LoadingSpinner';
import SearchCard from './SearchCard';

export type NavSearchDropdownProps = {
  items: Anime[] | undefined;
  onClose: () => void;
};

const Backdrop = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-x-0 top-16 h-screen bg-gray-900 bg-opacity-30"
    />
  );
};

const NavSearchDropdown = ({ items, onClose }: NavSearchDropdownProps) => {
  let dropdownContent;

  dropdownContent = <p className="text-center">No items found.</p>;

  if (typeof items === 'undefined') {
    dropdownContent = (
      <LoadingSpinner
        size="lg"
        className="text-center"
      />
    );
  }

  if (items?.length! > 0) {
    dropdownContent = items!.map(({ id, attributes }) => (
      <SearchCard
        key={id}
        id={id}
        attributes={attributes}
      />
    ));
  }

  return (
    <>
      <Backdrop onClose={onClose} />
      <div className="absolute top-12 max-h-[500px] w-full overflow-y-auto bg-gray-900 p-2">
        {dropdownContent}
      </div>
    </>
  );
};
export default NavSearchDropdown;
