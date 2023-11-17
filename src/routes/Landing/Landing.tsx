import { Details } from './Details';
import { Fedup } from './Fedup';
import { Header } from './Header';
import { Merch } from './MerchIntro';
import { MilkyWay } from './MilkyWay/MilkyWay';

export const Landing = () => {
  return (
    <div>
      <Header />
      <Merch />
      <Details />
      <MilkyWay />
      <Fedup />
    </div>
  );
};
