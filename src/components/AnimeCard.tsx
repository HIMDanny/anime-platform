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
  FloatingPortal,
} from '@floating-ui/react';
import { createPortal } from 'react-dom';

type AnimeCardProps = {
  id: string;
  title: string;
  thumbnail: string;
  type: string;
  description: string;
};

const AnimeCard = ({
  id,
  title,
  thumbnail,
  type,
  description,
}: AnimeCardProps) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const arrowRef = useRef(null);

  const { x, y, refs, strategy, context } = useFloating({
    open: isPopperOpen,
    onOpenChange: setIsPopperOpen,
    placement: 'right-start',
    middleware: [offset(10), shift(), arrow({ element: arrowRef })],
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
          src={thumbnail}
          alt={title}
        />
        <div className="absolute bottom-0 w-full bg-gray-900 py-1.5 px-2 opacity-80 shadow-[0_-2px_5px] shadow-gray-900">
          <p className="truncate text-sm text-gray-200">{title}</p>
        </div>
      </a>

      <FloatingPortal id="card-popout">
        {isPopperOpen && (
          <div
            ref={refs.setFloating}
            className="relative max-w-[350px] rounded-lg bg-gray-900 px-4 py-3"
            style={{ position: strategy, top: y ?? 0, left: x ?? 0 }}
            {...getFloatingProps()}
          >
            <p>{title}</p>
            {description && (
              <p className="mt-2 text-sm">{`${description
                .split(' ')
                .slice(0, 30)
                .join(' ')}...`}</p>
            )}
            <span
              ref={arrowRef}
              className="absolute top-4 left-[-10px] aspect-square w-0 transition-transform after:absolute after:h-full after:w-full after:border-t-8 after:border-r-[10px] after:border-b-8 after:border-r-gray-900 after:border-t-transparent after:border-b-transparent"
            />
          </div>
        )}
      </FloatingPortal>
    </>
  );
};
export default AnimeCard;
