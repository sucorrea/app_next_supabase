import { getAniversarios } from '@/app/actions';
import ListaLulus from './components/lista-lulus';
import NextBirthday from './components/next-birthday';
import { getNextBirthday } from './components/utils';

const Lulus = async () => {
  const listaAniversarios = await getAniversarios();

  const listaAniversariosOrdenada = listaAniversarios?.sort((a, b) => {
    const mesDiaA = a.aniversariantebirthdate.substring(5, 10);
    const mesDiaB = b.aniversariantebirthdate.substring(5, 10);

    return mesDiaA.localeCompare(mesDiaB);
  });

  return (
    <div>
      <NextBirthday data={getNextBirthday(listaAniversarios)} />
      <hr />
      <ListaLulus data={listaAniversariosOrdenada} />
    </div>
  );
};

export default Lulus;
