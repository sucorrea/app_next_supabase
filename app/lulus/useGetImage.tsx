'use client';
import { useStore } from '@/shared/useStore';

export const useGetImage = () => {
  const urlImage = useStore((state) => state.urlImage);

  return {
    urlImage,
  };
};
