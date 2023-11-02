import { toast } from 'react-toastify';

interface SquiglySvgProps {
  className?: string;
}

const SquiglySvg = ({ className }: SquiglySvgProps) => {
  return (
    <svg
      viewBox="0 0 758 3995"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.10352e-05 3995C195.822 3995 453.43 3878.32 624.168 3507.99C1050.43 2583.43 299.397 2345 506.185 1795.85C694.347 1296.15 294.508 1049.31 156.042 674.711C17.575 300.107 408.501 0 0.000183105 0L6.10352e-05 1997.5V3995Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};

export const Merch = () => {
  return (
    <div className="relative flex min-h-screen">
      <div className="bg-light-grey relative my-auto w-3/5">
        <div className="p-12">
          <p className="font-jua text-56 text-dark-grey uppercase">
            Are you? Cause we're not
          </p>
          <br />
          <br />
          <p className="font-jua text-28 text-dark-grey">
            The reclassification of Pluto as a dwarf planet in 2006 was a
            decision that continues to be met with resistance and controversy.
            It is argued that Pluto's removal as a planet was wrongfully based
            on arbitrary criteria, a double standard in their application, and a
            disregard for the historical and cultural significance of this
            celestial body.
          </p>
          <div className="flex">
            <div className="flex w-2/3 flex-col justify-end">
              <button
                className="bg-carmine-pink font-jua text-dark-grey w-2/3 rounded px-12 py-4 text-24 shadow transition-all hover:scale-105 hover:shadow-xl"
                onClick={() => toast.warn('*italian accent* ita no worka yet')}
              >
                Donate Here
              </button>
            </div>
            <img
              src="/assets/img/logo.png"
              alt="merch"
              className="animate-wiggle-more animate-duration-[3500ms] animate-infinite w-1/3 ease-in-out"
            />
          </div>
        </div>
        <SquiglySvg className="absolute left-full top-0 h-full" />
      </div>
      <div className="relative my-auto flex h-[80vh] w-2/5 justify-end p-12">
        <div className="relative h-min w-2/3 rounded-lg bg-white py-24">
          <img src="/assets/img/hat.png" alt="merch" className="" />
          <button
            className="bg-carmine-pink font-jua text-dark-grey absolute -bottom-4 -right-4 w-2/3 rounded px-12 py-4 text-24 shadow transition-all hover:scale-105 hover:shadow-xl"
            onClick={() => toast.warn('*italian accent* ita no worka yet')}
          >
            Merch
          </button>
        </div>
        <p className="font-jua text-32 absolute bottom-0 right-0 w-2/3 p-4 text-right text-white">
          BUT WE WON'T STAY QUIET. PLUTO DESERVES A CHANCE
        </p>
      </div>
    </div>
  );
};
