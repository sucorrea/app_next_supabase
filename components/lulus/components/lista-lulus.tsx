'use client';

import { getUser } from '@/app/actions';
import DataTable from '@/components/data-table';
import { Aniversario } from '@/utils/types/Types';
import { useEffect, useState } from 'react';
import { useColumns } from './columns';

type ListaLulusProps = {
  data: Aniversario[];
};

const ListaLulus = ({ data }: ListaLulusProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = getUser();
  const { columns } = useColumns(isAuthenticated);

  useEffect(() => {
    user.then((user) => {
      if (user.user?.id) {
        setIsAuthenticated(true);
      }
    });
  }, []);

  return (
    // eslint-disable-next-line prettier/prettier
    <div className="m-4 items-center justify-center lg:flex">
      <DataTable
        rows={data ?? []}
        columns={columns}
        columnIdFilter="aniversariantenome"
      />
    </div>
  );
};

export default ListaLulus;
