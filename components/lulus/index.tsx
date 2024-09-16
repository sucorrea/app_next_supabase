import ListaLulus from './components/lista-lulus';
import { getAniversarios } from '@/app/actions';

const Lulus = async () => {
  const listaAniversarios = await getAniversarios();

  return (
    <div className="flex flex-col gap-4 overflow-x-hidden">
      <h1>Aniversários</h1>
      <ListaLulus data={listaAniversarios} />
    </div>
  );
};

export default Lulus;
