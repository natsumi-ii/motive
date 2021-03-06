import { useAxios } from '@/lib/axios';

export const useLabels = () => {
  const { response, loading } = useAxios({
    method: 'GET',
    url: '/labels',
  });

  const data = loading ? [] : response;

  return { data };
};
