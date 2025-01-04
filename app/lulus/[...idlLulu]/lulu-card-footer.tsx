'use client';

import { Button } from '@/components/ui/button';

import { CardFooter } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const LuluCardFooter = () => {
  const router = useRouter();

  const handleClick = () => router.back();
  //create a function to change a  a picture when click on button Editar]

  const handleClickEditar = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = async (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        // Handle the file upload logic here
        console.log('Selected file:', file);
        // send a foto to supabase
      }
    };
    fileInput.click();
  };

  return (
    <CardFooter className="flex justify-between">
      <Button variant="outline" onClick={handleClick}>
        Voltar
      </Button>
      <Button onClick={handleClickEditar}>Editar</Button>
    </CardFooter>
  );
};

export default LuluCardFooter;
