// app/api/storage/route.ts
import { supabase } from '@/utils/supabase/client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data, error } = await supabase.storage.getBucket('app_storage');

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching files', error: (error as Error).message },
      { status: 500 }
    );
  }
}
