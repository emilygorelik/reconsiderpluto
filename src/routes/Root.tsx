import { Details } from './Landing/Details/Details';
import { Header } from './Landing/Header/Header';
import { Merch } from './Landing/Merch/Merch';

export const Root = () => {
  return (
    <div className="bg-dark-blue">
      <Header />
      <Merch />
      <Details />
    </div>
  );
};
