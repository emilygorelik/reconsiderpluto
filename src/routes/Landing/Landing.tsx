import { Details } from './Details/Details';
import { Fedup } from './Fedup/Fedup';
import { Header } from './Header/Header';
import { Merch } from './Merch/MerchIntro';
import { MilkyWay } from './MilkyWay/MilkyWay';

export const Landing = () => {
  return (
    <div>
      <Header />
      <Merch />
      <Details />
      <MilkyWay />
      <Fedup />\{' '}
    </div>
  );
};
