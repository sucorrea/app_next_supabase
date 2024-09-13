import { TipoChavePix } from '../../aniversarios/Models/Output/Types';

export interface LuluById {
  id: number;
  nome: string;
  foto: string;
  birthdate: string;
  iconesigno: string;
  chavePix: string;
  tipoChavePix: null | TipoChavePix;
  apelido: null | string;
  sobrenome: string;
  instagram: string;
  images: string;
}
