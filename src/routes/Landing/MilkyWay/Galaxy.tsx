import { useState } from 'react';
import {
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Neptune,
  Pluto,
  Rings,
  Saturn,
  Sun,
  Uranus,
  Venus,
} from './Planets';

enum Planet {
  MERCURY = 'mercury',
  VENUS = 'venus',
  EARTH = 'earth',
  MARS = 'mars',
  JUPITER = 'jupiter',
  SATURN = 'saturn',
  URANUS = 'uranus',
  NEPTUNE = 'neptune',
  PLUTO = 'pluto',
}

export const Galaxy = () => {
  const [currentPlanet, setCurrentPlanet] = useState<Planet>(Planet.PLUTO);

  return (
    <svg
      viewBox="0 0 1376 1003"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group"
    >
      <Sun />
      <Rings />
      <Mercury
        className={'hover:cursor-pointer'}
        selected={currentPlanet === Planet.MERCURY}
        onClick={() => setCurrentPlanet(Planet.MERCURY)}
      />
      <Venus
        className={'hover:cursor-pointer'}
        selected={currentPlanet === Planet.VENUS}
        onClick={() => setCurrentPlanet(Planet.VENUS)}
      />
      <Earth
        className={'hover:cursor-pointer'}
        selected={currentPlanet === Planet.EARTH}
        onClick={() => setCurrentPlanet(Planet.EARTH)}
      />
      <Mars
        className={'hover:cursor-pointer'}
        selected={currentPlanet === Planet.MARS}
        onClick={() => setCurrentPlanet(Planet.MARS)}
      />
      <Jupiter
        className={'hover:cursor-pointer'}
        selected={currentPlanet === Planet.JUPITER}
        onClick={() => setCurrentPlanet(Planet.JUPITER)}
      />
      <Saturn
        className={'hover:cursor-pointer'}
        selected={currentPlanet === Planet.SATURN}
        onClick={() => setCurrentPlanet(Planet.SATURN)}
      />
      <Uranus
        className={'hover:cursor-pointer'}
        selected={currentPlanet === Planet.URANUS}
        onClick={() => setCurrentPlanet(Planet.URANUS)}
      />
      <Neptune
        className={'hover:cursor-pointer'}
        selected={currentPlanet === Planet.NEPTUNE}
        onClick={() => setCurrentPlanet(Planet.NEPTUNE)}
      />
      <Pluto
        className={'hover:cursor-pointer'}
        selected={currentPlanet === Planet.PLUTO}
        onClick={() => setCurrentPlanet(Planet.PLUTO)}
      />
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
