import { INodeProperties } from 'n8n-workflow';

export const getAllFoldersFields: INodeProperties[] = [
  {
    displayName: 'Apenas Pastas Na Raiz',
    name: 'inRoot',
    type: 'boolean',
    default: true,
    // eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
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
