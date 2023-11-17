import { HTMLAttributes } from 'react';
import cx from 'classnames';

interface ButtonProps {
  className?: string;
  children: React.ReactNode | string;
}
export const Button = ({
  className,
  children,
  ...rest
}: ButtonProps & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cx(
        className,
        'btn btn-accent whitespace-nowrap rounded border-none p-2 text-black shadow transition-all md:px-12 md:py-4',
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
