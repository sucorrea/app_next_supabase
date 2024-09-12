// app/api/storage/route.ts
import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data, error } = await createClient().storage.listBuckets();

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
