import { Aniversario } from '@/app/api/aniversarios/Models/Output/Types';
import { api } from './api';

export const fetchAniversarios = async (): Promise<Aniversario[]> => {
  const response = await api.get('aniversarios');
  if (!response.data) {
    throw new Error('Network response was not ok');
  }
  return response.data as Aniversario[];
};

export const fetchFotos = async (): Promise<string[]> => {
  const response = await api.get('fotos');
  if (!response.data) {
    throw new Error('Network response was not ok');
  }
  return response.data as string[];
};

export const fetchUrlImageById = async (idLulu: number): Promise<string> => {
  const response = await api.get(`foto/${idLulu}`);
  if (!response.data) {
    throw new Error('Network response was not ok');
  }
  return response.data as string;
};
export const fetchLuluById = async (idLulu: number): Promise<string> => {
  const response = await api.get(`lulus/${idLulu}`);
  if (!response.data) {
    throw new Error('Network response was not ok');
  }
  return response.data as string;
};
