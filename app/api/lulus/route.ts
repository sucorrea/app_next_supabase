import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export interface Lulu {
  id: number;
  nome: string;
  foto: string;
  birthDate: string;
  idResponsavel: string;
  iconeSigno: string;
}

export async function GET(): Promise<NextResponse> {
  // Passando os dois parâmetros de tipo, com 'null' para o tipo de erro
  const { data, error } = await createClient()
    .from('lulus')
    .select(
      `
      id,
      nome,
      foto,
      birthDate,
      iconeSigno,
      lulus: lulusResponsavel(id, nome, foto)
    `
    );

  if (error) {
    return NextResponse.json(
      { message: 'Erro ao buscar dados', error },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
