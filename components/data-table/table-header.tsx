import { Table } from '@tanstack/react-table';

import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { flexRender } from '@tanstack/react-table';

type DataTableHeaderProps<TData> = {
  table: Table<TData>;
} & React.HTMLAttributes<HTMLTableSectionElement>;

const DataTableHeader = <TData,>({
  table,
  ...props
}: DataTableHeaderProps<TData>) => (
  <TableHeader {...props}>
    {table.getHeaderGroups().length > 0 &&
      table.getHeaderGroups().map(({ headers, id }) => (
        <TableRow key={id}>
          {headers.map((header) => (
            <TableHead key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </TableHead>
          ))}
        </TableRow>
      ))}
  </TableHeader>
);

export default DataTableHeader;
