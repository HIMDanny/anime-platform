import { useRef, useState } from 'react';
import {
  useFloating,
  offset,
  shift,
  autoUpdate,
  arrow,
  useHover,
  useFocus,
  useInteractions,
  safePolygon,
  flip,
} from '@floating-ui/react';
import CardPopper from './CardPopper';
import { Attributes } from '../../../types/Anime';

type AnimeCardProps = {
  id: string;
  attributes: Attributes;
};

const AnimeCard = ({ id, attributes }: AnimeCardProps) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const arrowRef = useRef(null);

  const { x, y, refs, strategy, context, placement } = useFloating({
    open: isPopperOpen,
    onOpenChange: setIsPopperOpen,
    placement: 'right-start',
    middleware: [offset(10), shift(), flip(), arrow({ element: arrowRef })],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {
    handleClose: safePolygon(),
  });
  const focus = useFocus(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
  ]);

  const title = attributes.titles.en ?? attributes.titles.en_jp;

  return (
    <>
      <a
        ref={refs.setReference}
        href="#"
        className="relative block min-w-[150px] overflow-hidden rounded-lg border border-gray-600"
        {...getReferenceProps()}
      >
        <img
          className="block object-cover"
          src={attributes.posterImage.medium}
          alt={title}
        />
        <div className="absolute bottom-0 w-full bg-gray-900 py-1.5 px-2 opacity-80 shadow-[0_-2px_5px] shadow-gray-900">
          <p className="truncate text-sm text-gray-200">{title}</p>
        </div>
      </a>

      <CardPopper
        open={isPopperOpen}
        ref={refs.setFloating}
        cardId={id}
        arrowRef={arrowRef}
        attributes={attributes}
        floatingProps={{
          strategy,
          x,
          y,
          getFloatingProps,
          placement,
        }}
      />
    </>
  );
};
export default AnimeCard;
