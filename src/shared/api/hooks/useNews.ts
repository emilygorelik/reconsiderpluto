import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchData, putData, removeData } from '../dba';
import { Post, post } from '../types/post.types';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const useNews = () => {
  const { data: posts, refetch: refetchPosts } = useQuery({
    queryKey: ['NEWS'],
    queryFn: async () => {
      return await fetchData('news');
    },
    cacheTime: 10 * 60 * 60,
  });

  const { mutate: updatePost } = useMutation<void, AxiosError, Post>({
    mutationFn: async (data) =>
      putData(
        'news',
        post({
          title: data.title,
          date: data.date,
          content: data.content,
        }),
      ),
    onSuccess: async () => {
      await refetchPosts();
      toast.success('Post has been updated!');
    },
    onError: () => toast.error('Post update failed'),
  });

  const { mutate: deletePost } = useMutation({
    mutationFn: async (title: string) =>
      await removeData('news', { title: { S: title } }),
    onSuccess: async () => {
      await refetchPosts();
      toast.success('News post has been deleted!');
    },
    onError: () => toast.error('News post deletion failed'),
  });

  return {
    posts,
    updatePost: updatePost,
    deletePost: deletePost,
  };
};

export default useNews;
