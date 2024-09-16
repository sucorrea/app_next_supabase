import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { notFound } from 'next/navigation';

import LuluCardFooter from './lulu-card-footer';
import LuluCardImage from './lulu-card-image';
import { getFotosById, getLuluById } from '@/app/actions';

export async function generateMetadata({
  params,
}: {
  params: { idlLulu: string };
}) {
  if (!params.idlLulu) {
    notFound();
  }

  return {
    title: params.idlLulu,
    description: '',
  };
}

export default async function Page({
  params,
}: {
  params: { idlLulu: string };
}) {
  if (!params.idlLulu) {
    notFound();
  }

  const lulu = await getLuluById(Number(params.idlLulu));

  const image = await getFotosById(Number(params.idlLulu));

  return (
    <Card>
      {/* //className="w-full" */}
      <CardHeader>
        <CardTitle>{lulu.nome}</CardTitle>
        <CardDescription>{`@${lulu.instagram}`}</CardDescription>
      </CardHeader>
      <CardContent>
        <>
          <LuluCardImage image={image} name={lulu.nome} />
          {/* <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form> */}
        </>
      </CardContent>
      <LuluCardFooter />
    </Card>
  );
}
