'use client';
import Image from 'next/image';

import { Icon } from '@iconify/react';
import { ColumnDef } from '@tanstack/react-table';

import {
  Aniversario,
  TipoChavePix,
} from '@/app/api/aniversarios/Models/Output/Types';
import { LINK_HOROSCOPO_DIARIO, LINK_INSTAGRAM } from '@/utils/constants';
import AvatarNome from './avatar-nome';
import LinkIconWithText from './link-icon-with-text';
import { formatterChavePix, formatterDate, getSigno } from './utils';

export const useColumns = () => {
  const columns: ColumnDef<Aniversario>[] = [
    {
      accessorKey: 'idaniversariante',
      header: '',
    },
    {
      accessorKey: 'aniversariantenome',
      header: 'Aniversariante',
      cell: ({ row }) => <AvatarNome row={row} />,
    },
    {
      accessorKey: 'aniversarianteiconesigno',
      header: 'Signo',
      cell: ({ row }) => {
        const data =
          new Date(row.original.aniversariantebirthdate) ?? new Date();

        return (
          <LinkIconWithText
            link={`${LINK_HOROSCOPO_DIARIO}${getSigno(data).value}/`}
            text={getSigno(data).label ?? ''}
          >
            <Icon icon={row.getValue('aniversarianteiconesigno')} />
          </LinkIconWithText>
        );
      },
    },
    {
      accessorKey: 'aniversariantinstagram',
      header: 'Instagram',
      cell: ({ row: { getValue } }) => (
        <LinkIconWithText
          link={`${LINK_INSTAGRAM}${getValue('aniversariantinstagram')}`}
          text={`@${getValue('aniversariantinstagram')}`}
        >
          <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
        </LinkIconWithText>
      ),
    },
    {
      accessorKey: 'aniversariantebirthdate',
      header: 'Aniversário',
      size: 100,
      minSize: 100,
      cell: ({ row: { getValue } }) => {
        const data = formatterDate(getValue('aniversariantebirthdate') ?? '');
        const aniversario = data.lastIndexOf(' de ');
        return data.substring(0, aniversario);
      },
    },
    {
      accessorKey: 'aniversariantetipochavepix',
      header: 'Tipo Chave Pix',
      cell: ({ row: { getValue } }) => {
        const tipoChave = getValue('aniversariantetipochavepix') as string;
        return (
          <p className={tipoChave === 'cpf' ? 'uppercase' : 'capitalize'}>
            {getValue('aniversariantetipochavepix')}
          </p>
        );
      },
    },
    {
      accessorKey: 'aniversariantechavepix',
      header: 'Chave Pix',
      cell: ({ row: { getValue } }) => {
        const tipoChave = getValue(
          'aniversariantetipochavepix'
        ) as TipoChavePix;
        const chave = getValue('aniversariantechavepix') as string;
        return formatterChavePix(tipoChave, chave);
      },
    },
    {
      accessorKey: 'responsavelnome',
      header: () => (
        <span className="flex flex-row-reverse items-center">Responsável</span>
      ),
      cell: ({ row }) => <AvatarNome row={row} isResponsavel />,
      size: 50,
      maxSize: 50,
    },
  ];

  return { columns };
};
