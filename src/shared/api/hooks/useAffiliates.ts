import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { fetchData, putData, removeData } from '../dba';
import { Affiliate, affiliation } from '../types/affiliate.types';

const useAffiliates = () => {
  const { data: affiliates, refetch: refetchAffiliates } = useQuery({
    queryKey: ['AFFILIATES'],
    queryFn: async () => {
      return await fetchData('affiliations');
    },
    cacheTime: 10 * 60 * 60,
  });

  const { mutate: updateAffiliate } = useMutation<void, AxiosError, Affiliate>({
    mutationFn: async (data) =>
      putData(
        'affiliations',
        affiliation({
          name: data.name,
          source: data.source,
          slug: data.slug,
        }),
      ),
    onSuccess: async () => {
      await refetchAffiliates();
      toast.success('Affiliation has been updated!');
    },
    onError: () => toast.error('Affiliate update failed'),
  });

  const { mutate: deleteAffiliate } = useMutation({
    mutationFn: async (name: string) =>
      await removeData('affiliations', { name: { S: name } }),
    onSuccess: async () => {
      await refetchAffiliates();
      toast.success('Affiliation has been deleted!');
    },
    onError: () => toast.error('Affiliate deletion failed'),
  });

  return {
    affiliates,
    updateAffiliate: updateAffiliate,
    deleteAffiliate: deleteAffiliate,
  };
};

export default useAffiliates;
