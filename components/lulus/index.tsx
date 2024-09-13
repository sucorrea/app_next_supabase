import { fetchAniversarios } from '@/utils/queries';
import ListaLulus from './components/lista-lulus';

const Lulus = async () => {
  const listaAniversarios = await fetchAniversarios();

  // const listaOrdenada = listaAniversarios.sort(
  //   (a, b) =>
  //     new Date(a.aniversariantebirthdate).getTime() -
  //     new Date(b.aniversariantebirthdate).getTime()
  // );

  return (
    <div className="flex flex-col gap-4 overflow-x-hidden">
      <h1>Aniversários</h1>
      <div>
        <ListaLulus data={listaAniversarios} />
      </div>
    </div>
  );
};

export default Lulus;
