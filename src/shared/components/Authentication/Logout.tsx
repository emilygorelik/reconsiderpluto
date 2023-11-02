import { Icon } from '@iconify/react';
import cx from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { toast } from 'react-toastify';

interface LogoutProps {
  className?: string;
}
export const Logout = ({
  className,
  ...rest
}: LogoutProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cx(
        'flex gap-x-2 rounded-lg bg-grey-500 p-3 text-grey-300 hover:bg-grey-300 hover:text-grey-500 [&>*]:my-auto',
        className,
      )}
      {...rest}
      onClick={() => {
        toast.warn('This feature is not yet completed');
      }}
    >
      <Icon icon="tabler:power" />
      <span>Logout</span>
    </button>
  );
};
