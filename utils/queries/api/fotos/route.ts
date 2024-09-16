import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const { data } = await createClient()
    .storage.from('app_storage')
    .list('images/');

  const allUrls = data?.map(
    (image) =>
      createClient().storage.from('app_storage').getPublicUrl(image.name).data
        .publicUrl
  );

  return NextResponse.json(allUrls);
};
