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
  );
};

export default Lulus;
