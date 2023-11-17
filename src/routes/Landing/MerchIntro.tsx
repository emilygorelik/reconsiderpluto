import { toast } from 'react-toastify';
import { Button } from '../../shared/components/Button/Button';

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
    <div className="my-4 w-screen bg-secondary p-4 text-primary sm:w-5/6">
      <SquiglySvg className="invisible absolute left-[99%] top-0 h-full sm:visible" />
      <div className="flex flex-col p-2 sm:p-8 md:p-12">
        <h2 className="uppercase">
          Are you comfortable with 8 planets? <br /> Are you?! Cause we're not.
        </h2>
        <p>
          The reclassification of Pluto as a dwarf planet in 2006 was a decision
          that continues to be met with resistance and controversy. It is argued
          that Pluto's removal as a planet was wrongfully based on arbitrary
          criteria, a double standard in their application, and a disregard for
          the historical and cultural significance of this celestial body.
        </p>
        <div className="flex flex-col-reverse items-end justify-end">
          <Button
            onClick={() => toast.warn('*italian accent* ita no worka yet')}
            className="px-8"
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
  );
};
