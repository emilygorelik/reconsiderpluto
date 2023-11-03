import { Details } from './Landing/Details/Details';
import { Footer } from './Landing/Footer/Footer';
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
      <Footer />
    </div>
  );
};
