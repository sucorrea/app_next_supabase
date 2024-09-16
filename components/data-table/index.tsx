import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';

import { useState } from 'react';
import ColumnVisibilityDropdown from '../lulus/components/column-visibility-drop-down';
import { Table as TableUi } from '../ui/table';
import DataTableInputFilter, {
  DataTableInputFilterProps,
} from './data-table-input-filter';
import DataTableBody from './table-body';
import DataTableHeader from './table-header';

type DataTableProps<TData> = {
  columns: ColumnDef<TData>[];
  hasFilter?: boolean;
  filterProps?: DataTableInputFilterProps<TData>;
  rows: TData[];
};

const DataTable = <TData,>({
  rows,
  columns,
  hasFilter = true,
  filterProps,
}: DataTableProps<TData>) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data: rows,
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
    <div className="rounded-md border">
      <div className="flex w-full">
        <div className="flex items-center py-4">
          <div>
            <div className="flex items-center gap-3">
              {hasFilter && (
                <DataTableInputFilter
                  table={table}
                  columnId={filterProps?.columnId as keyof TData & string}
                />
              )}
              <ColumnVisibilityDropdown table={table} />
            </div>
            <TableUi>
              <DataTableHeader table={table} />
              <DataTableBody table={table} columns={columns} />
            </TableUi>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
