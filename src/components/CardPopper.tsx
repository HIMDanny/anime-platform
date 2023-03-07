/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable react/display-name */
import { forwardRef, type RefObject } from 'react';
import { type Attributes } from '../types/Anime';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import StatusBadge from './StatusBadge';
import { useQuery } from 'react-query';
import getAnimeGenres from '../api/getAnimeGenresById';
import { createPortal } from 'react-dom';
import LoadingSpinner from './LoadingSpinner';
import AnimeTypes from './AnimeTypes';

// TODO: show different colors of rating depending on points

type FloatingProps = {
  strategy: 'absolute' | 'fixed';
  placement: string;
  x: number | null;
  y: number | null;
  getFloatingProps: (
    userProps?: React.HTMLProps<HTMLElement> | undefined,
  ) => Record<string, unknown>;
};

export type CardPopperProps = {
  open: boolean;
  cardId: string;
  attributes: Attributes;
  arrowRef: RefObject<HTMLDivElement>;
  floatingProps: FloatingProps;
};

const CardPopper = forwardRef<HTMLDivElement, CardPopperProps>(
  ({ open, attributes, arrowRef, floatingProps, cardId }, ref) => {
    const { data: genres, isLoading } = useQuery(
      ['anime-genre', cardId],
      () => getAnimeGenres(cardId),
      {
        enabled: open,
      },
    );

    const popperContent = (
      <>
        <p>{attributes.titles.en ?? attributes.titles.en}</p>
        {attributes.description !== '' && (
          <p className="mt-2 text-xs md:text-sm">{`${attributes.description
            .split(' ')
            .slice(0, 30)
            .join(' ')}...`}</p>
        )}
        <AnimeTypes
          className="mt-2 text-sm"
          attributes={attributes}
        />
        {genres?.meta.count > 0 && (
          <div className="mt-2 whitespace-pre-line text-sm">
            <span className="mr-2 font-bold">Genres:</span>
            {genres?.data.map(({ attributes: { name } }: any) => (
              <span
                key={name}
                className="mr-2 inline-block"
              >
                {name}
              </span>
            ))}
          </div>
        )}

        <div className="mt-2 text-sm">
          <span className="font-bold">Rating:</span> {attributes.averageRating}
        </div>
      </>
    );

    if (!open) return null;

    return createPortal(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        ref={ref}
        className="relative z-20 min-w-[150px] max-w-[350px] rounded-lg bg-gray-900 px-4 py-3"
        style={{
          position: floatingProps.strategy,
          top: floatingProps.y ?? 0,
          left: floatingProps.x ?? 0,
        }}
        {...floatingProps.getFloatingProps()}
      >
        {isLoading ? (
          <LoadingSpinner
            className="text-center"
            size="lg"
          />
        ) : (
          popperContent
        )}

        <div
          ref={arrowRef}
          className={classNames(
            'absolute top-4 aspect-square w-0 transition-transform after:absolute after:h-full after:w-full ',
            {
              'left-[-10px] after:border-t-8 after:border-r-[10px] after:border-b-8 after:border-r-gray-900 after:border-t-transparent after:border-b-transparent':
                floatingProps.placement === 'right-start',
              'right-0 after:border-b-8 after:border-l-[10px] after:border-t-8 after:border-l-gray-900 after:border-b-transparent after:border-t-transparent':
                floatingProps.placement === 'left-start',
            },
          )}
        />
      </motion.div>,
      document.querySelector('#portal') as HTMLElement,
    );
  },
);
export default CardPopper;
