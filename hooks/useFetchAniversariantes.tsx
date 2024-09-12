'use client';
import { fetchAniversarios } from '@/utils/queries';
import { useQuery } from '@tanstack/react-query';

const useFetchAniversariantes = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['nivers'],
    queryFn: fetchAniversarios,
  });

  return {
    listaAniversarios: data,
    isLoadingListaAniversarios: isLoading,
    errorListaAniversarios: error,
  };
};

export default useFetchAniversariantes;
