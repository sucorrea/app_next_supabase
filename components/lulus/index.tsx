import { fetchAniversarios } from '@/utils/queries';
import { DataTableDemo } from './lulus';

export default async function Lulus() {
  const listaAniversarios = await fetchAniversarios();

  return (
    <div className="flex flex-col gap-4 overflow-x-hidden">
      <h1>Aniversários</h1>
      <div>
        <DataTableDemo data={listaAniversarios} />
      </div>
    </div>
  );
}
