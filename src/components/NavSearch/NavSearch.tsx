/* eslint-disable @typescript-eslint/promise-function-async */
import classNames from 'classnames';
import { useState } from 'react';
import { useQuery } from 'react-query';
import getAnimesByTitle from '../../api/getAnimesByTitle';
import useDebounce from '../../hooks/useDebounce';
import LoadingSpinner from '../LoadingSpinner';
import NavSearchDropdown from './NavSearchDropdown';

const NavBarSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isSearchInFocus, setIsSearchInFocus] = useState(false);

  const debouncedSearchInput = useDebounce(searchInput, 300);

  const {
    data: searchedAnimes,
    isLoading,
    isFetching,
  } = useQuery(
    ['search', searchInput],
    () => getAnimesByTitle(debouncedSearchInput),
    {
      enabled: Boolean(debouncedSearchInput),
      refetchOnWindowFocus: false,
    },
  );

  const onSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchInput(e.currentTarget.value);

  const onFormSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
  };

  const handleSearchFocus = () => {
    setIsSearchInFocus(true);
  };

  const handleSearchBlur = () => {
    setIsSearchInFocus(false);
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="relative"
      onFocus={handleSearchFocus}
      onBlur={handleSearchBlur}
    >
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        {isLoading || isFetching ? (
          <LoadingSpinner
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            size="xs"
          />
        ) : (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
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
        )}

        <input
          autoComplete="off"
          type="text"
          id="default-search"
          className={classNames(
            'block w-96 rounded-lg border border-gray-600 bg-gray-700 p-2 pl-10 text-sm text-white placeholder-gray-400 outline-none transition-[width] focus:w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
            { 'w-full': searchInput !== '' },
          )}
          placeholder="Search anime by title..."
          required
          value={searchInput}
          onChange={onSearchInputChange}
        />
      </div>
      {searchInput !== '' && <NavSearchDropdown items={searchedAnimes?.data} />}
    </form>
  );
};
export default NavBarSearch;
