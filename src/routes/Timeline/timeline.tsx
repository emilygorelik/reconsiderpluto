import timelineData from './timelineData.json';

function Timeline() {
  return (
    <div className="prose flex w-full max-w-full flex-col items-center justify-center px-20">
      <h1 className="py-8">The History of Pluto</h1>
      {timelineData.map((entry, index) => (
        <div
          key={entry.title}
          className={`flex ${
            index === 0
              ? 'first-element'
              : index === timelineData.length - 1
              ? 'last-element'
              : index % 2 === 0
              ? 'odd-element justify-start'
              : 'even-element justify-end'
          }`}
        >
          <div className="w-1/2 max-w-[1000px] rounded-3xl bg-white p-4 text-dark-blue">
            <h3
              className={`text-dark-blue ${
                index % 2 === 0 ? 'text-right' : ''
              } text-lg font-bold`}
            >
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
