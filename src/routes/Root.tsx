import { Details } from './Landing/Details/Details';
import { Fedup } from './Landing/Fedup/Fedup';
import { Footer } from './Landing/Footer/Footer';
import { Header } from './Landing/Header/Header';
import { MerchExtended } from './Landing/Merch/MerchExtended';
import { Merch } from './Landing/Merch/MerchIntro';
import { MilkyWay } from './Landing/MilkyWay/MilkyWay';

export const Root = () => {
  return (
    <div className="bg-dark-blue">
      <Header />
      <Merch />
      <Details />
      <MilkyWay />
      <MerchExtended />
      <Fedup />
      <Footer />
    </div>
  );
};
