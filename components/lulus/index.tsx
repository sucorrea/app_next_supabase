import { getAniversarios } from '@/app/actions';
import ListaLulus from './components/lista-lulus';
import NextBirthday from './components/next-birthday';
import { getNextBirthday } from './components/utils';

const Lulus = async () => {
  const listaAniversarios = await getAniversarios();

  return (
    <div>
      <NextBirthday data={getNextBirthday(listaAniversarios)} />
      <hr />
      <ListaLulus data={listaAniversarios} />
    </div>
    // <div className="flex flex-col items-center">
    //   <div className={cn('flex flex-col gap-2', scroll)}>
    //     <div className="flex gap-2">
    //     </div>
    //     <p className="text-4xl font-bold text-primary">Aniversários</p>
    //   </div>
    // </div>
  );
};

export default Lulus;
