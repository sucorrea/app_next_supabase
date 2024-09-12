import { TipoChavePix } from '@/app/api/aniversarios/Models/Output/Types';
import { formatToCPF, formatToPhone } from 'brazilian-values';

export const formatterDate = (data: string): string => {
  const date = new Date(data);

  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export type ValueFormatter = (value: string) => string;

export const formatterChavePixPorTipo: Record<TipoChavePix, ValueFormatter> = {
  cpf: (chave: string) => formatToCPF(chave),
  email: (chave: string) => chave,
  celular: (chave: string) => formatToPhone(chave),
  aleatorio: (chave: string) => chave,
  '': (chave: string) => chave,
};

export const formatterChavePix = (
  tipo: TipoChavePix,
  chave: string
): string => {
  const formatter = formatterChavePixPorTipo[tipo];

  if (!formatter) {
    return chave;
  }

  return formatter(chave);
};
