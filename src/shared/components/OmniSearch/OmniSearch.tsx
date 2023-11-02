import { Icon } from '@iconify/react';

export const OmniSearch = () => {
  return (
    <div className="flex w-full flex-col items-center bg-blue-400 p-2">
      <div className="flex w-1/2 gap-x-2 rounded-md bg-blue-300 p-2">
        <Icon icon="tabler:search" className="my-auto text-grey-50" />
        <input
          className="my-auto w-full bg-transparent text-grey-100 placeholder:text-grey-100 focus:outline-0"
          placeholder="Search for styles, seasons, approvals, finances and more..."
        />
      </div>
    </div>
  );
};
