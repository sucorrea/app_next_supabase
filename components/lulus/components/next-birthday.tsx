import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Aniversario } from '@/utils/types/Types';
import FotoNome from './foto-nome';
import { formatterDate } from './utils';
type NextBirthdayProps = {
  data: Aniversario | null;
};

const NextBirthday = ({ data }: NextBirthdayProps) => {
  return (
    <Card className="m-8 max-w-md bg-amber-100 text-amber-900">
      <CardHeader>
        <CardTitle className="text-primary">Próxima Aniversariante</CardTitle>
        <CardDescription>
          <FotoNome row={data} classNameFoto="h-20 w-20" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 pb-4">
          <p className="font-bold text-primary">Data:</p>
          <p>
            {formatterDate(data?.aniversariantebirthdate ?? '') ??
              'Não definido'}
          </p>
        </div>
        <hr />
        <div className="flex flex-col space-y-1.5">
          <p className="font-bold text-primary">Responsável:</p>
          <FotoNome row={data} isResponsavel />
        </div>
      </CardContent>
    </Card>
  );
};

export default NextBirthday;
