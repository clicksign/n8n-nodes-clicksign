import { INodeProperties } from 'n8n-workflow';

export const getAllFoldersFields: INodeProperties[] = [
  {
    displayName: 'Apenas Pastas Na Raiz',
    name: 'inRoot',
    type: 'boolean',
    default: true,
    description:
      'Informe se deseja listar apenas pastas na raiz de sua estrutura de pastas',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['folder'],
      },
    },
  },
];
