import { Aniversario } from '@/app/api/aniversarios/Models/Output/Types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Row } from '@tanstack/react-table';

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
    ? (responsavelnome ?? responsavelapelido)
    : (aniversarianteapelido ?? aniversariantenome);

  const foto = isResponsavel ? responsavelfoto : aniversariantefoto;

  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={foto} alt={nome} title={nome} />
        <AvatarFallback>{nome.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="capitalize">{nome}</div>
    </div>
  );
};

export default AvatarNome;
