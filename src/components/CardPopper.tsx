import { FloatingPortal } from '@floating-ui/react';
import { forwardRef, RefObject } from 'react';
import { Attributes } from '../types/Anime';

type FloatingProps = {
  strategy: 'absolute' | 'fixed';
  x: number | null;
  y: number | null;
  getFloatingProps: (
    userProps?: React.HTMLProps<HTMLElement> | undefined,
  ) => Record<string, unknown>;
};

export type CardPopperProps = {
  open: boolean;
  attributes: Attributes;
  arrowRef: RefObject<HTMLElement>;
  floatingProps: FloatingProps;
};

const CardPopper = forwardRef<HTMLDivElement, CardPopperProps>(
  ({ open, attributes, arrowRef, floatingProps }, ref) => {
    return (
      <FloatingPortal id="card-popout">
        {open && (
          <div
            ref={ref}
            className="relative max-w-[350px] rounded-lg bg-gray-900 px-4 py-3"
            style={{
              position: floatingProps.strategy,
              top: floatingProps.y ?? 0,
              left: floatingProps.x ?? 0,
            }}
            {...floatingProps.getFloatingProps()}
          >
            <p>{attributes.titles.en ?? attributes.titles.en}</p>
            {attributes.description && (
              <p className="mt-2 text-sm">{`${attributes.description
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
    );
  },
);
export default CardPopper;
