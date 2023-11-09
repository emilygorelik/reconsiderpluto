import { Details } from './Details/Details';
import { Fedup } from './Fedup/Fedup';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { MerchExtended } from './Merch/MerchExtended';
import { Merch } from './Merch/MerchIntro';
import { MilkyWay } from './MilkyWay/MilkyWay';

export const Landing = () => {
  return (
    <div className="relative bg-dark-blue">
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
