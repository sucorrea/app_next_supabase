'use client';

import { Button } from '@/components/ui/button';

import { CardFooter } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const LuluCardFooter = () => {
  const router = useRouter();

  const handleClick = () => router.back();

  return (
    <CardFooter className="flex justify-between">
      <Button variant="outline" onClick={handleClick}>
        Voltar
      </Button>
      <Button>Editar</Button>
    </CardFooter>
  );
};

export default LuluCardFooter;
