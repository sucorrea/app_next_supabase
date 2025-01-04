'use client';
import { useEffect, useState } from 'react';

import { getFotosById } from '@/app/actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { LINK_LULU } from '@/utils/constants';
import { Aniversario } from '@/utils/types/Types';
import Link from 'next/link';

interface FotoNomeProps {
  row: Aniversario | null;
  isResponsavel?: boolean;
  classNameFoto?: string | undefined;
}

const FotoNome = ({
  row,
  isResponsavel = false,
  classNameFoto = '',
}: FotoNomeProps) => {
  const [imagem, setImagem] = useState(LINK_LULU);

  const {
    idaniversariante,
    aniversariantenome,
    aniversarianteapelido,
    responsavelapelido,
    responsavelnome,
    idresponsavel,
  } = row ?? ({} as Aniversario);

  useEffect(() => {
    getFotosById(isResponsavel ? idresponsavel : idaniversariante)
      .then((res: string) => {
        if (res) {
          setImagem(res);
        }
      })
      .catch((error: Error) => console.log(error));
  }, []);

  const nome = isResponsavel
    ? (responsavelapelido ?? responsavelnome)
    : (aniversarianteapelido ?? aniversariantenome);

  const classResponsavel = isResponsavel ? '' : '';

  return (
    <Link href={`/lulus/${isResponsavel ? idresponsavel : idaniversariante}`}>
      <div className={cn('flex items-center gap-2', classResponsavel)}>
        <Avatar className={classNameFoto}>
          <AvatarImage src={imagem} alt={nome} title={nome} />
          <AvatarFallback>{nome?.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="text-nowrap text-2xl capitalize">{nome}</p>
      </div>
    </Link>
  );
};

export default FotoNome;
