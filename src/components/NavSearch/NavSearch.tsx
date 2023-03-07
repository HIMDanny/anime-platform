import { useEffect, useRef, useState } from 'react';
import getAnimesByTitle from '../../api/getAnimesByTitle';
import useDebounce from '../../hooks/useDebounce';
import type Animes from '../../types/Animes';
import LoadingSpinner from '../UI/LoadingSpinner';
import NavSearchDropdown from './NavSearchDropdown';

const SearchIcon = ({ isSearching }: { isSearching: boolean }) => {
  if (isSearching) {
    return (
      <LoadingSpinner
        className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        size="xs"
      />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <svg
        aria-hidden="true"
        className="h-5 w-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
  );
};

const NavBarSearch = () => {
  const [searchInput, setSearchInput] = useState('');

  const { data, isSearching } = useSearchByTitle(searchInput);

  const formRef = useRef<HTMLFormElement>(null);

  const onSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchInput(e.currentTarget.value);

  const onFormSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
  };

  const clearSearchInput = () => {
    setSearchInput('');
  };

  // checks if user clicked outside of form
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        clearSearchInput();
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <form
      onSubmit={onFormSubmit}
      className="relative w-1/2"
      ref={formRef}
    >
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <SearchIcon isSearching={isSearching} />

        <input
          autoComplete="off"
          type="text"
          id="default-search"
          className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2 pl-10 text-sm text-white placeholder-gray-400 outline-none transition-[width] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Search anime by title..."
          required
          value={searchInput}
          onChange={onSearchInputChange}
        />
      </div>
      {searchInput !== '' && (
        <NavSearchDropdown
          items={(data as Animes).data}
          onClose={clearSearchInput}
        />
      )}
    </form>
  );
};

function useSearchByTitle(searchTerm: string) {
  const debouncedSearchInput = useDebounce(searchTerm, 500);

  const [isSearching, setIsSearching] = useState(false);
  const [data, setData] = useState<Animes | {}>({});

  const trimmedSearchInput = debouncedSearchInput.trim();

  useEffect(() => {
    if (trimmedSearchInput) {
      setIsSearching(true);
      getAnimesByTitle(debouncedSearchInput).then((r) => {
        setIsSearching(false);

        setData(r as Animes);
      });
    } else {
      setData({});
      setIsSearching(false);
    }
  }, [trimmedSearchInput]);

  return { data, isSearching };
}

export default NavBarSearch;
