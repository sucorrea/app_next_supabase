'use client';
import { useEffect, useState } from 'react';

import { getUser } from '@/app/actions';
import DataTable from '@/components/data-table';
import { useColumns } from './columns';

type ListaLulusProps = {
  data: any[];
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
