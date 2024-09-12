import { Row } from '@tanstack/react-table';

import { Aniversario } from '@/app/api/aniversarios/Models/Output/Types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface AvatarNomeProps {
  row: Row<Aniversario>;
  isResponsavel?: boolean;
}

const AvatarNome = ({ row, isResponsavel = false }: AvatarNomeProps) => {
  const {
    aniversariantenome,
    aniversarianteapelido,
    aniversariantefoto,
    responsavelapelido,
    responsavelnome,
    responsavelfoto,
  } = row.original ?? ({} as Aniversario);

  const nome = isResponsavel
    ? (responsavelapelido ?? responsavelnome)
    : (aniversarianteapelido ?? aniversariantenome);

  const foto = isResponsavel ? responsavelfoto : aniversariantefoto;

  const classResponsavel = isResponsavel ? 'flex-row-reverse' : '';

  return (
    <div className={cn('flex items-center gap-2', classResponsavel)}>
      <Avatar>
        <AvatarImage src={foto} alt={nome} title={nome} />
        <AvatarFallback>{nome.charAt(0)}</AvatarFallback>
      </Avatar>
      <p className="text-nowrap capitalize">{nome}</p>
    </div>
  );
};

export default AvatarNome;
