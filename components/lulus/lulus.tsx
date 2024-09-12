'use client';
import { useState } from 'react';

import { Icon } from '@iconify/react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
  ColumnDef,
  ColumnFiltersState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Aniversario,
  TipoChavePix,
} from '@/app/api/aniversarios/Models/Output/Types';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '../ui/input';
import AvatarNome from './components/avatar-nome';
import { formatterChavePix, formatterDate } from './utils';

export const columns: ColumnDef<Aniversario>[] = [
  {
    accessorKey: 'idaniversariante',
    header: '',
    maxSize: 10,
    size: 10,
  },
  {
    accessorKey: 'aniversariantenome',
    header: 'Aniversariante',
    cell: ({ row }) => <AvatarNome row={row} />,
    size: 50,
    maxSize: 50,
  },
  {
    accessorKey: 'aniversarianteiconesigno',
    header: 'Signo',
    maxSize: 50,
    minSize: 50,
    cell: ({ row }) => <Icon icon={row.getValue('aniversarianteiconesigno')} />,
    size: 50,
  },
  // {
  //   accessorKey: 'insta',
  //   header: 'Instagram',
  //   maxSize: 50,
  //   minSize: 50,
  //   cell: ({ row }) => (
  //     <Link href={`https://instagram.com/${row.getValue('insta')}`}>
  //       <Icon icon={row.getValue('aniversarianteiconesigno')} />
  //     </Link>
  //   ),
  //   size: 50,
  // },
  {
    accessorKey: 'aniversariantebirthdate',
    header: 'Aniversário',
    cell: ({ row: { getValue } }) => {
      const data = formatterDate(getValue('aniversariantebirthdate') ?? '');
      const aniversario = data.lastIndexOf(' de ');
      return data.substring(0, aniversario);
    },
  },
  {
    accessorKey: 'aniversariantetipochavepix',
    header: 'Tipo Chave Pix',
    maxSize: 10,
    size: 10,
    cell: ({ row: { getValue } }) => {
      const tipoChave = getValue('aniversariantetipochavepix') as
        | string
        | undefined;
      return (
        <div className={tipoChave === 'cpf' ? 'uppercase' : 'capitalize'}>
          {getValue('aniversariantetipochavepix')}
        </div>
      );
    },
  },
  {
    accessorKey: 'aniversariantechavepix',
    header: 'Chave Pix',
    cell: ({ row: { getValue } }) => {
      const tipoChave = getValue('aniversariantetipochavepix') as TipoChavePix;
      const chave = getValue('aniversariantechavepix') as string;
      return formatterChavePix(tipoChave, chave);
    },
  },
  {
    accessorKey: 'responsavelnome',
    header: 'Responsável',
    cell: ({ row }) => <AvatarNome row={row} isResponsavel />,
    size: 50,
    maxSize: 50,
  },
];

type DataTableDemoProps = {
  data: Aniversario[];
};

export function DataTableDemo({ data }: DataTableDemoProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Aniversariante..."
          value={
            (table
              .getColumn('aniversariantenome')
              ?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table
              .getColumn('aniversariantenome')
              ?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(({ headers, id }) => (
              <TableRow key={id}>
                {headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
