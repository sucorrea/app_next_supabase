import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { notFound } from 'next/navigation';

import { getLuluById } from '@/app/actions';
import LuluCardFooter from './lulu-card-footer';
import LuluCardImage from './lulu-card-image';
import { LuluById } from '@/utils/types/Types';

export async function generateMetadata({
  params,
}: {
  params: { idlLulu: string };
}) {
  if (!params.idlLulu) {
    notFound();
  }

  return {
    title: params.idlLulu[1],
    description: '',
  };
}

export default async function Page({
  params,
}: {
  params: { idlLulu: string };
}) {
  if (!params.idlLulu[0]) {
    notFound();
  }

  const lulu =
    (await getLuluById(Number(params.idlLulu[0]))) ?? ({} as LuluById);

  return (
    <div className="flex justify-center">
      <Card>
        <CardHeader>
          <CardTitle>{lulu.nome}</CardTitle>
          <CardDescription>{`@${lulu?.instagram}`}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row gap-2">
          <LuluCardImage image={lulu?.foto} name={lulu?.nome} />
          {/*<p>Instagram</p>*/}
          {/*<p>{`@${lulu?.instagram}`}</p>*/}
        </CardContent>
        <LuluCardFooter />
      </Card>
    </div>
  );
}
