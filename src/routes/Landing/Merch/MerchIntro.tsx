import { toast } from 'react-toastify';
import { PinkButton } from '../../../shared/components/Button/PinkButton';

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
    <div className="relative min-h-screen">
      <div className="flex">
        <div className="bg-light-grey relative my-auto w-3/5">
          <SquiglySvg className="absolute left-[99%] top-0 h-full" />
          <div className="p-2 sm:p-8 md:p-12">
            <p className="font-jua text-dark-grey tansition-all whitespace-nowrap text-[2.7vw] uppercase">
              Are you comfortable with 8 planets?
            </p>
            <p className="font-jua text-dark-grey tansition-all text-[3vw] uppercase">
              Are you?! Cause we're not.
            </p>
            <br />
            <p className="font-jua text-dark-grey text-[1.75vw]">
              The reclassification of Pluto as a dwarf planet in 2006 was a
              decision that continues to be met with resistance and controversy.
              It is argued that Pluto's removal as a planet was wrongfully based
              on arbitrary criteria, a double standard in their application, and
              a disregard for the historical and cultural significance of this
              celestial body.
            </p>
            <div className="flex">
              <div className="flex w-2/3 flex-col justify-end">
                <PinkButton
                  onClick={() =>
                    toast.warn('*italian accent* ita no worka yet')
                  }
                >
                  Donate Here
                </PinkButton>
              </div>
              <img
                src="/assets/img/logo.png"
                alt="merch"
                className="animate-wiggle-more animate-duration-[3500ms] animate-infinite w-1/3 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="flex w-2/5 flex-col justify-between">
          <div>
            <div className="relative m-auto w-3/5 rounded-lg bg-white py-4 md:py-16">
              <img src="/assets/img/hat.png" alt="merch" className="" />
              <PinkButton
                className="absolute -bottom-4 -right-4 "
                onClick={() => toast.warn('*italian accent* ita no worka yet')}
              >
                MERCH
              </PinkButton>
            </div>
          </div>
          <div className="p-4">
            <p className="font-jua text-right text-[1.75vw] text-white">
              BUT WE WON'T STAY QUIET.
            </p>
            <p className="font-jua text-right text-[1.75vw] text-white">
              PLUTO DESERVES A CHANCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
