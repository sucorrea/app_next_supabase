import { getAniversarios } from '@/app/actions';
import ListaLulus from './components/lista-lulus';
import NextBirthday from './components/next-birthday';
import { getNextBirthday } from './components/utils';

const Lulus = async () => {
  const listaAniversarios = await getAniversarios();

  console.log('listaAniversarios', listaAniversarios);
  const listaAniversariosOrdenada = listaAniversarios.sort((a, b) => {
    const mesDiaA = a.aniversariantebirthdate.substring(5, 10); // 'MM-DD'
    const mesDiaB = b.aniversariantebirthdate.substring(5, 10); // 'MM-DD'

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
