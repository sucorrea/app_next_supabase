'use client';
import { useEffect, useState } from 'react';

import { Row } from '@tanstack/react-table';

import { Aniversario } from '@/app/api/aniversarios/Models/Output/Types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { LINK_LULU } from '@/utils/constants';
import { fetchUrlImageById } from '@/utils/queries';
import Link from 'next/link';

interface AvatarNomeProps {
  row: Row<Aniversario>;
  isResponsavel?: boolean;
}

const AvatarNome = ({ row, isResponsavel = false }: AvatarNomeProps) => {
  const [imagem, setImagem] = useState(LINK_LULU);

  const {
    idaniversariante,
    aniversariantenome,
    aniversarianteapelido,
    responsavelapelido,
    responsavelnome,
    idresponsavel,
  } = row.original ?? ({} as Aniversario);

  useEffect(() => {
    fetchUrlImageById(isResponsavel ? idresponsavel : idaniversariante)
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

  const classResponsavel = isResponsavel ? 'flex-row-reverse' : '';

  return (
    <Link href={`/lulu/${isResponsavel ? idresponsavel : idaniversariante}`}>
      <div className={cn('flex items-center gap-2', classResponsavel)}>
        <Avatar>
          <AvatarImage src={imagem} alt={nome} title={nome} />
          <AvatarFallback>{nome.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="text-nowrap capitalize">{nome}</p>
      </div>
    </Link>
  );
};

export default AvatarNome;
