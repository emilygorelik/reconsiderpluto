import { Link, Outlet } from 'react-router-dom';
export const Root = () => {
  return (
    <div className="relative">
      <div className="flex w-full justify-end gap-4 bg-accent p-2 text-lg text-primary fixed z-50">
        <Link
          to="/"
          className="rounded p-2 font-bold uppercase hover:bg-accent-focus"
        >
          home
        </Link>
        <Link
          to="/merch"
          className="rounded p-2 font-bold uppercase hover:bg-accent-focus"
        >
          merch
        </Link>
        {/* <Link
          to="/timeline"
          className="rounded p-2 font-bold uppercase hover:bg-accent-focus"
        >
          timeline
        </Link> */}
      </div>
      <br/> <br/>
      <Outlet />
    </div>
  );
};
