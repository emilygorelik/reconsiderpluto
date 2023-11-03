import { HTMLAttributes } from 'react';
import cx from 'classnames';

interface PinkButtonProps {
  className?: string;
  children: React.ReactNode | string;
}
export const PinkButton = ({
  className,
  children,
  ...rest
}: PinkButtonProps & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cx(
        className,
        'bg-carmine-pink font-jua text-dark-grey w-2/3 whitespace-nowrap rounded p-2 text-[1.5vw] shadow transition-all hover:scale-105 hover:shadow-xl md:px-12 md:py-4',
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
