export interface OutDocumento {
  eTag: string;
  size: number;
  mimetype: string;
  cacheControl: string;
  lastModified: string;
  contentLength: number;
  httpStatusCode: number;
}

export interface OutFotos {
  idLulu: number;
  nomeLulu: string;
  idFoto: string;
  nome: string;
  createAt: Date;
  updateAt: Date;
  documento: OutDocumento;
}
