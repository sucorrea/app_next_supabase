'use client';

import { Row } from '@tanstack/react-table';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Aniversario } from '@/utils/types/Types';
import Link from 'next/link';

interface AvatarNomeProps {
  row: Row<Aniversario>;
  isResponsavel?: boolean;
}

const AvatarNome = ({ row, isResponsavel = false }: AvatarNomeProps) => {
  // const [imagem, setImagem] = useState(LINK_LULU);

  const {
    idaniversariante,
    aniversariantenome,
    aniversarianteapelido,
    responsavelapelido,
    responsavelnome,
    idresponsavel,
    responsavelfoto,
    aniversariantefoto,
  } = row.original ?? ({} as Aniversario);

  // useEffect(() => {
  //   getFotosById(isResponsavel ? idresponsavel : idaniversariante)
  //     .then((res: string) => {
  //       if (res) {
  //         setImagem(res);
  //       }
  //     })
  //     .catch((error: Error) => console.log(error));
  // }, []);

  const image = isResponsavel ? responsavelfoto : aniversariantefoto;
  const nome = isResponsavel
    ? (responsavelapelido ?? responsavelnome)
    : (aniversarianteapelido ?? aniversariantenome);

  const classResponsavel = isResponsavel ? 'flex-row-reverse' : '';

  const idRoute = isResponsavel ? idresponsavel : idaniversariante;

  return (
    <Link href={`/lulus/${idRoute}/${nome}`}>
      <div className={cn('flex items-center gap-2', classResponsavel)}>
        <Avatar>
          <AvatarImage src={image} alt={nome} title={nome} />
          <AvatarFallback>{nome.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="text-nowrap capitalize">{nome}</p>
      </div>
    </Link>
  );
};

export default AvatarNome;
