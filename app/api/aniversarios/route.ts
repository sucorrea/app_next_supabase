import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';
import { Aniversario } from './Models/Output/Types';

// pages/api/aniversarios.ts

export const GET = async () => {
  const { data, error } = await createClient()
    .rpc('get_aniversarios')
    .select('*');

  if (error) {
    return NextResponse.json(
      { message: 'Erro ao buscar dados', error },
      { status: 500 }
    );
  }

  return NextResponse.json(data as Aniversario[]);
};
