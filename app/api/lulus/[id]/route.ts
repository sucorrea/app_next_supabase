import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';
import { LuluById } from './types';

export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> => {
  const { id } = params;

  const { data } = await createClient()
    .from('lulus')
    .select('*')
    .eq('id', id)
    .single();

  return NextResponse.json(data as LuluById);
};
