import { Link, Outlet } from 'react-router-dom';
export const Root = () => {
  return (
    <div className="relative">
      <div className="flex justify-end w-full gap-4 bg-accent text-primary p-2 text-lg">
        <Link to="/" className="uppercase p-2 rounded hover:bg-accent-focus font-bold">
          home
        </Link>
        <Link to="/timeline" className="uppercase p-2 rounded hover:bg-accent-focus font-bold">
          timeline
        </Link>
        <Link to="/merch" className="uppercase p-2 rounded hover:bg-accent-focus font-bold">
          merch
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
