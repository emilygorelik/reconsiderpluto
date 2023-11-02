export interface Affiliate {
  name: string;
  slug: string;
  source: string;
}

export const affiliation = ({ name, source, slug }: Affiliate) => {
  return {
    name: { S: name },
    data: {
      M: {
        name: { S: name },
        source: { S: source },
        slug: { S: slug },
      },
    },
  };
};
