import { PlutoAndComets } from './PlutoAndComets';
import cx from 'classnames';

interface SquiglyProps {
  className?: string;
}
const SquiglyTop = ({ className }: SquiglyProps) => {
  return (
    <svg
      viewBox="0 0 1575 226"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(className)}
    >
      <path
        d="M1575 225.404C1575 148.226 1346.5 130.671 1200.5 63.3796C836 -104.621 748 123.878 531.5 42.3779C334.5 -31.7815 348.185 32.3049 200.5 86.8779C52.8151 141.451 0 64.4037 0 225.404L787.5 225.404H1575Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};

const SquiglyBottom = ({ className }: SquiglyProps) => {
  return (
    <svg
      className={cx(className)}
      viewBox="0 0 1575 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1575 0.000640869C1575 77.1786 1477.78 92.3917 1317.5 80.0008C916.5 49.0008 845.5 12 629 93.5C432 167.659 348.185 193.099 200.5 138.526C52.8151 83.9533 0 161.001 0 0.000671387L787.5 0.000640869H1575Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};

export const Fedup = () => {
  return (
    <div className="relative mx-4 mt-32 flex flex-col justify-between sm:flex-row">
      <div className="mb-8 sm:w-2/3">
        <h2>Fed up? So are we.</h2>
        <p>
          "Research" says Pluto isn't a planet partially due to the fact that it
          hasn't cleared its orbit of debris. Well, neither has Earth. So, if
          Pluto isn't a planet, neither are we.
          <br />
          And sometimes our rooms are messy too. We don't see anyone calling us
          out for that. Pluto, we're with you. We're here for you. We're here to
          fight for you.
          <br />
          We can't do it alone. We need your help. We need your support. We need
          your money. We need your donations. We need your credit card
          information. We need your social security number. We need your
          mother's maiden name, and the name of your first childhood pet.
          <br />
          ...Just kidding. We do need your money though.
        </p>
      </div>
      <PlutoAndComets className="mb-16 sm:w-1/3 md:max-w-[400px]" />
    </div>
  );
};
