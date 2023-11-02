export interface Podcast {
  title: string;
  episode: string;
  season: string;
  date: string;
  summary: string;
  transcript: string;
  contributors: string[];
}

export const podcast = ({
  title,
  episode,
  season,
  date,
  transcript,
  summary,
  contributors,
}: Podcast) => {
  return {
    title: { S: title },
    season: { S: season },
    data: {
      M: {
        title: { S: title },
        date: { S: date },
        episode: { S: episode },
        season: { S: season },
        summary: { S: summary },
        transcript: { S: transcript },
        contributors: { L: contributors },
      },
    },
  };
};
