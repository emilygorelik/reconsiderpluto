export const blog = (
  media_title: string,
  media_type: string,
  media_date: string,
  media_source: string,
  media_content: string,
) => {
  const blog = {
    title: { S: media_title },
    data: {
      M: {
        media_type: { S: media_type },
        media_title: { S: media_title },
        media_date: { S: media_date },
        media_source: { S: media_source },
        media_content: { S: media_content },
      },
    },
  };

  return blog;
};

export interface BlogFormInput {
  title: string;
  type: string;
  date: string;
  source: string;
  content: string;
}

export interface BlogResponse {
  media_title: string;
  media_type: string;
  media_date: string;
  media_source: string;
  media_content: string;
}
