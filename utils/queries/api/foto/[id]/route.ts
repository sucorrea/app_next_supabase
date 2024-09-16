import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const { data, error } = await createClient()
    .rpc('get_fotobyid', { id_lulu: Number(id) })
    .select('*')
    .single();

  const nomeArquivo = data?.nome ?? '';
  const { data: urlFoto } = await createClient()
    .storage.from('app_storage')
    .getPublicUrl(nomeArquivo);

  if (error) {
    return NextResponse.json(
      { message: 'Erro ao buscar a foto', error },
      { status: 500 }
    );
  }

  return NextResponse.json(urlFoto.publicUrl);
}
