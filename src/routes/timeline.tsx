const timelineData = [
  {
    title: 'February 18, 1930 - Love at First Sight',
    content:
      'Astronomer Clyde Tombaugh stumbles upon Pluto, and it\'s love at first sight! Pluto is declared the ninth planet in our solar system, and the universe celebrates with a cosmic dance party.',
  },
  {
    title: 'August 24, 2006 - The Heartbreak',
    content:
      'Dark day in Pluto\'s history: Pluto gets downgraded to a dwarf planet by the International Astronomical Union (IAU). Astronomers worldwide shed a tear, and Pluto throws a tiny, icy tantrum.',
  },
  {
    title: 'July 14, 2015 - A Bittersweet Farewell',
    content:
      'The heartbreak of a generation as the New Horizons spacecraft performs a bittersweet flyby of Pluto. Pluto longs to be a real planet again, and humans worldwide start a petition to get it back in the planetary club.',
  },
  {
    title: 'April 1, 1998 - Secret Interstellar Disco',
    content:
      'On April 1, 1998, Pluto hosts a secret interstellar disco in the Kuiper Belt, complete with funky beats and out-of-this-world dance moves. The galaxy still talks about it!',
  },
  {
    title: 'May 12, 2022 - The Planetary Revolt',
    content:
      'In a zany twist on May 12, 2022, Pluto attempts to break free from the dwarf planet label, dons a cape, and leads a revolution in the night sky, demanding planetary justice and equal status!',
  },
  {
    title: 'September 9, 2040 - Ice Cream Social',
    content:
      'On September 9, 2040, to heal its icy heart, Pluto organizes an epic ice cream social with all the planets. Neptune brings the blueberry ripple, and even Earth promises to share some rocky road.',
  },
];

function Timeline() {
  return (
    <div className="flex flex-col justify-center p-20 bg-dark-blue">
      {timelineData.map((entry, index) => (
        <div
          className={`border-t-4 border-light-blue p-4 ${
            index === 0 ? 'border-r-4 border-t-0 rounded-r-3xl' :
              index === timelineData.length - 1 ? 'border-l-4 rounded-l-3xl' :
                index % 2 === 0 ? 'border-r-4 rounded-r-3xl' : 'border-l-4 rounded-l-3xl'
          }`}
        >
          <div className="bg-white p-4 rounded-3xl">
            <h3 className={`${index % 2 === 0 ? 'text-right' : ''} font-bold text-lg`}>
              {entry.title}
            </h3>
            <p className="text-base">{entry.content}</p>
          </div>

        </div>
      ))}
    </div>
  );
}


export default Timeline;
