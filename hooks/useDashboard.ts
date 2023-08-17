import { useState } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';

export const useDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: postsData,
    mutate,
    isLoading: postsLoading,
  } = useSWR(`/api/posts?username=admin`, fetcher);

  const columnsFetcher = (...args) => fetch(...args).then((res) => res.json());
  const {} = useSWR(`/api/columns?username=admin`, columnsFetcher);

  const addPost = async (data: any) => {
    try {
      setIsLoading(true);
      const postsResponse = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (postsResponse.status === 201) {
        setIsLoading(false);
        await mutate({ ...data });
        toast.success('Your post has been created');
      } else {
        setIsLoading(false);
        toast.error(postsResponse.statusText);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const deletePost = async (id: number | string) => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        await mutate();
        setIsLoading(false);
        toast.success('Your post has been removed');
      }
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return { addPost, deletePost, isLoading, postsLoading, postsData };
};
