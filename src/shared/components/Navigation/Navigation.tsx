import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import { Logout } from '../Authentication/Logout';
import { Icon } from '@iconify/react';

export const Navigation = () => {
  return (
    <nav className="flex h-full w-1/5 flex-col justify-between bg-grey-800 p-8">
      <div>
        <h1 className="text-20 text-grey-50">ASH Portal</h1>
        <br />
        <div className="flex flex-col gap-y-2">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              cx('transition-color rounded-md p-2', {
                'text-white': isActive,
                'text-grey-500 hover:bg-grey-200': !isActive,
              })
            }
          >
            <span className="flex gap-x-1 [&>*]:my-auto">
              <Icon icon="material-symbols:home" />
              <span>Home</span>
            </span>
          </NavLink>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              cx('transition-color rounded-md p-2', {
                'text-white': isActive,
                'text-grey-500 hover:bg-grey-200': !isActive,
              })
            }
          >
            <span className="flex gap-x-1 [&>*]:my-auto">
              <Icon icon="basil:chat-solid" />
              <span>ASH Chat</span>
            </span>
          </NavLink>
          <NavLink
            to="/approvals"
            className={({ isActive }) =>
              cx('transition-color rounded-md p-2', {
                'text-white': isActive,
                'text-grey-500 hover:bg-grey-200': !isActive,
              })
            }
          >
            <span className="flex gap-x-1 [&>*]:my-auto">
              <Icon icon="ic:twotone-verified" />
              <span>Approvals</span>
            </span>
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              cx('transition-color rounded-md p-2', {
                'text-white': isActive,
                'text-grey-500 hover:bg-grey-200': !isActive,
              })
            }
          >
            <span className="flex gap-x-1 [&>*]:my-auto">
              <Icon icon="bi:collection-fill" />
              <span>Collection</span>
            </span>
          </NavLink>
          <div className="flex flex-col gap-y-2 pl-4">
            <NavLink
              to="/collection/style-status"
              className={({ isActive }) =>
                cx('rounded-md p-2 transition-colors', {
                  'text-white': isActive,
                  'text-grey-500 hover:bg-grey-200': !isActive,
                })
              }
            >
              <span className="flex gap-x-1 [&>*]:my-auto">
                <Icon icon="heroicons-outline:status-online" />
                <span>Style Status</span>
              </span>
            </NavLink>
            <NavLink
              to="/collection/analytics"
              className={({ isActive }) =>
                cx('rounded-md p-2 transition-colors', {
                  'text-white': isActive,
                  'text-grey-500 hover:bg-grey-200': !isActive,
                })
              }
            >
              <span className="flex gap-x-1 [&>*]:my-auto">
                <Icon icon="ic:twotone-analytics" />
                <span>Analytics</span>
              </span>
            </NavLink>
          </div>
          <NavLink
            to="/learning-center"
            className={({ isActive }) =>
              cx('rounded-md p-2 transition-colors', {
                'text-white': isActive,
                'text-grey-500 hover:bg-grey-200': !isActive,
              })
            }
          >
            <span className="flex gap-x-1 [&>*]:my-auto">
              <Icon icon="carbon:machine-learning-model" />
              <span>Learning Center</span>
            </span>
          </NavLink>
          <br />
          <hr className="border-grey-200" />
        </div>
      </div>
      <Logout className="mx-auto text-center" />
    </nav>
  );
};
