import { toast } from 'react-toastify';
import { Button } from '../../shared/components/Button/Button';

interface SquiglySvgProps {
  className?: string;
}

const SquiglySvgTop = ({ className }: SquiglySvgProps) => {
  return (
    <svg
      viewBox="0 0 1575 299"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1575 298.524C1575 221.346 1529 119.816 1383 52.5241C1018.5 -115.476 924.5 180.524 708 99.0242C511 24.8648 413.685 182.451 266 237.024C118.315 291.597 0 137.524 0 298.524L787.5 298.524H1575Z"
        fill="#d9d9d9"
      />
    </svg>
  );
};

const SquiglySvgBottom = ({ className }: SquiglySvgProps) => {
  return (
    <svg
      viewBox="0 0 1575 299"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1575 6.10352e-05C1575 77.1781 1529 178.708 1383 246C1018.5 414 924.5 118 708 199.5C511 273.659 413.685 116.073 266 61.4998C118.315 6.92676 0 161 0 9.15527e-05L787.5 6.10352e-05H1575Z"
        fill="#d9d9d9"
      />
    </svg>
  );
};

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
    <div className="relative my-32 md:flex">
      <SquiglySvgTop className="absolute bottom-[99%] md:invisible" />

      <div className="relative w-full bg-secondary p-2 text-primary sm:p-8 md:p-12">
        <SquiglySvg className="invisible absolute left-[99%] top-0 md:visible md:h-full" />
        <div className="flex flex-col ">
          <h2 className="uppercase">
            Are you comfortable with 8 planets? <br />
            Are you?! Cause we're not.
          </h2>
        </div>
        <div>
          <p>
            The reclassification of Pluto as a dwarf planet in 2006 was a
            decision that continues to be met with resistance and controversy.
            It is argued that Pluto's removal as a planet was wrongfully based
            on arbitrary criteria, a double standard in their application, and a
            disregard for the historical and cultural significance of this
            celestial body.
          </p>
          <div className="flex justify-between">
            <Button
              onClick={() => toast.warn('*italian accent* ita no worka yet')}
              className="my-auto px-8"
            >
              Donate Here
            </Button>

            <img
              src="/assets/img/logo.png"
              alt="give us money"
              className="w-1/3 animate-wiggle-more ease-in-out animate-duration-[3500ms] animate-infinite"
            />
          </div>
        </div>
      </div>
      <SquiglySvgBottom className="md:invisible" />
    </div>
  );
};
