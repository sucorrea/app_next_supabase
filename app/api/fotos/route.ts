import { createClient } from '@/utils/supabase/server';
import { StorageError } from '@supabase/storage-js';
import { NextResponse } from 'next/server';

export declare type HttpResponseBucket<T> = {
  data: T | null;
  error: StorageError | null;
};

export const GET = async () => {
  const { data } = await createClient().storage.listBuckets();

  return NextResponse.json(data);
  //return data;
};
