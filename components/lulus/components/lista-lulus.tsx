'use client';

import { getUser } from '@/app/actions';
import DataTable from '@/components/data-table';
import { useEffect, useState } from 'react';
import { useColumns } from './columns';
import { Aniversario } from '@/utils/types/Types';

type ListaLulusProps = {
  data: Aniversario[];
};

const ListaLulus = ({ data }: ListaLulusProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = getUser();
  const { columns } = useColumns(isAuthenticated);

  useEffect(() => {
    user.then((user) => {
      console.log('user', user.user);
      if (user.user?.id) {
        setIsAuthenticated(true);
      }
    });
  }, []);

  const row = data || [];

  return <DataTable rows={row} columns={columns} />;
};
export default ListaLulus;
