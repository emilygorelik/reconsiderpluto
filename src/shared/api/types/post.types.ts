export interface Post {
  title: string;
  date: string;
  content: string;
}
export const post = ({ title, date, content }: Post) => {
  return {
    title: { S: title },
    date: { S: date },
    data: {
      M: {
        content: { S: content },
        title: { S: title },
        date: { S: date },
      },
    },
  };
};
