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
export type Signos =
  | 'aries'
  | 'touro'
  | 'gemeos'
  | 'cancer'
  | 'leao'
  | 'virgem'
  | 'libra'
  | 'escorpiao'
  | 'sagitario'
  | 'capricornio'
  | 'aquario'
  | 'peixes';

type SignoValues = {
  value: Signos;
  label: string;
};

export function getSigno(dataNascimento: Date): SignoValues {
  const dia = dataNascimento.getDate();
  const mes = dataNascimento.getMonth() + 1; // Meses em JavaScript são indexados a partir de 0

  if ((dia >= 21 && mes === 3) || (dia <= 20 && mes === 4)) {
    return { value: 'aries', label: 'Áries' };
  } else if ((dia >= 21 && mes === 4) || (dia <= 20 && mes === 5)) {
    return { value: 'touro', label: 'Touro' };
  } else if ((dia >= 21 && mes === 5) || (dia <= 20 && mes === 6)) {
    return { value: 'gemeos', label: 'Gêmeos' };
  } else if ((dia >= 21 && mes === 6) || (dia <= 22 && mes === 7)) {
    return { value: 'cancer', label: 'Câncer' };
  } else if ((dia >= 23 && mes === 7) || (dia <= 22 && mes === 8)) {
    return { value: 'leao', label: 'Leão' };
  } else if ((dia >= 23 && mes === 8) || (dia <= 22 && mes === 9)) {
    return { value: 'virgem', label: 'Virgem' };
  } else if ((dia >= 23 && mes === 9) || (dia <= 22 && mes === 10)) {
    return { value: 'libra', label: 'Libra' };
  } else if ((dia >= 23 && mes === 10) || (dia <= 21 && mes === 11)) {
    return { value: 'escorpiao', label: 'Escorpião' };
  } else if ((dia >= 22 && mes === 11) || (dia <= 21 && mes === 12)) {
    return { value: 'sagitario', label: 'Sagitário' };
  } else if ((dia >= 22 && mes === 12) || (dia <= 20 && mes === 1)) {
    return { value: 'capricornio', label: 'Capricórnio' };
  } else if ((dia >= 21 && mes === 1) || (dia <= 18 && mes === 2)) {
    return { value: 'aquario', label: 'Aquário' };
  } else if ((dia >= 19 && mes === 2) || (dia <= 20 && mes === 3)) {
    return { value: 'peixes', label: 'Peixes' };
  } else {
    throw new Error('Data de nascimento inválida');
  }
}

export function getIconeSigno(signo: string): string {
  switch (signo) {
    case 'Áries':
      return 'aries';
    case 'Touro':
      return 'taurus';
    case 'Géréos':
      return 'gemini';
    case 'Câncer':
      return 'cancer';
    case 'Leão':
      return 'leo';
    case 'Virgem':
      return 'virgo';
    case 'Libra':
      return 'libra';
    case 'Escorpião':
      return 'scorpio';
    case 'Sagitário':
      return 'sagittarius';
    case 'Capricórnio':
      return 'capricorn';
    case 'Aquário':
      return 'aquarius';
    case 'Peixes':
      return 'pisces';
    default:
      throw new Error('Signo inválido');
  }
}
