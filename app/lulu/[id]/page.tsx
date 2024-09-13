import { notFound } from 'next/navigation';

import { fetchLuluById } from '@/utils/queries';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  if (!params.slug) {
    notFound();
  }

  return {
    title: params.slug,
    description: '',
  };
}

export default async function Page({
  params,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (!params.slug) {
    notFound();
  }

  const lulu = await fetchLuluById(Number(params.slug));

  return (
    <>
      <header>
        <div>
          <p>{lulu}</p>
        </div>
      </header>
      <main>oi</main>
    </>
  );
}
