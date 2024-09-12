import { fetchAniversarios } from '@/utils/queries';
import ListaLulus from './components/lista-lulus';

const Lulus = async () => {
  const listaAniversarios = await fetchAniversarios();

  return (
    <div className="flex flex-col gap-4 overflow-x-hidden">
      <h1>Aniversários</h1>
      <span className="icon-[icomoon-free--flickr2]"></span>
      <div>
        <ListaLulus data={listaAniversarios} />
      </div>
    </div>
  );
};

export default Lulus;
