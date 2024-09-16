export interface Aniversariante {
  id: number;
  nome: string;
  foto: string;
  birthdate: string;
  iconesigno: string;
}

export interface Responsavel {
  nome: string;
  foto: string;
}

export type TipoChavePix = 'cpf' | 'email' | 'celular' | 'aleatorio' | '';

export interface Aniversario {
  idaniversariante: number;
  aniversariantenome: string;
  aniversariantefoto: string;
  aniversariantebirthdate: string;
  aniversarianteiconesigno: string;
  idresponsavel: number;
  responsavelnome: string;
  responsavelfoto: string;
  responsavelapelido: string;
  aniversariantinstagram: string;
  aniversariantetipochavepix: TipoChavePix;
  aniversariantechavepix: string;
  aniversarianteapelido: string;
  aniversariantesobrenome: string;
}

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
