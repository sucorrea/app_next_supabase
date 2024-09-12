import { Aniversario } from '@/app/api/aniversarios/Models/Output/Types';
import { createClient } from '../supabase/server';
import { api } from './api';

export const fetchAniversarios = async (): Promise<Aniversario[]> => {
  const response = await api.get('/api/aniversarios');
  if (!response.data) {
    throw new Error('Network response was not ok');
  }
  return response.data as Aniversario[];
};

export const fetchFotos = async () => {
  const response = await api.get('/api/storage');
  if (!response.data) {
    throw new Error('Network response was not ok');
  }
  return response.data;
};
export const create = async () => {
  return await createClient().storage.createBucket('avatars', {
    public: false,
    allowedMimeTypes: ['image/png'],
    fileSizeLimit: 1024,
  });
};

create();
