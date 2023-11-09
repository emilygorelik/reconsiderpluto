import { Link, Outlet } from 'react-router-dom';
export const Root = () => {
  return (
    <div className="relative bg-dark-blue">
      <div className="absolute right-2 top-2 z-50 flex gap-x-2">
        <Link to="/" className="underline">
          home
        </Link>
        <Link to="/timeline" className="underline">
          timeline
        </Link>
        <Link to="/merch" className="underline">
          merch
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
