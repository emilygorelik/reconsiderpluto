import {
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Neptune,
  Pluto,
  Rings,
  Saturn,
  Uranus,
  Venus,
} from './Planets';

export const Galaxy = () => {
  return (
    <svg viewBox="0 0 1376 1003" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rings />
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
      <Pluto />
      <defs>
        <clipPath id="clip0_0_1">
          <rect
            width="294"
            height="305"
            fill="white"
            transform="translate(0 327)"
          />
        </clipPath>
        <clipPath id="clip1_0_1">
          <rect
            width="85"
            height="83"
            fill="white"
            transform="translate(111 330)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
