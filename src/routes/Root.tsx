import { Header } from './Landing/Header/Header';
import { Merch } from './Landing/Merch/Merch';

export const Root = () => {
  return (
    <div className="bg-dark-blue min-h-screen">
      <Header />
      <Merch />
    </div>
  );
};
