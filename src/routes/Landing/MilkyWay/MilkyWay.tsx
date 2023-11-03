import { Galaxy } from './Galaxy';

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
        fill="#1C2029"
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
        fill="#1C2029"
      />
    </svg>
  );
};

export const MilkyWay = () => {
  return (
    <div className="bg-dark-grey relative min-h-screen">
      <SquiglySvgTop className="absolute bottom-full" />
      <div className="p-2">
        <p className="font-jua text-56 text-light-grey">
          The Milky Way Galaxy.
        </p>
        <p className="font-jua text-56 text-light-grey">
          click on some freakin' planets and explore more.
        </p>
      </div>
      <Galaxy />
      <SquiglySvgBottom className="absolute top-full" />
    </div>
  );
};
