import { Details } from './Landing/Details/Details';
import { Header } from './Landing/Header/Header';
import { Merch } from './Landing/Merch/Merch';
import { MilkyWay } from './Landing/MilkyWay/MilkyWay';

export const Root = () => {
  return (
    <div className="bg-dark-blue">
      <Header />
      <Merch />
      <Details />
      <MilkyWay />
    </div>
  );
};
