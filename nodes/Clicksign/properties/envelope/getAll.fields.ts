import { INodeProperties } from 'n8n-workflow';

export const getAllFields: INodeProperties[] = [
  {
    displayName: 'Filtro Status',
    name: 'status',
    type: 'string',
    default: '',
    description:
      'Informe um status caso deseje filtrar: draft, running, closed, canceled',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['getAll'],
      },
    },
  },
  {
    displayName: 'Filtro Nome',
    name: 'name',
    type: 'string',
    default: '',
    description: 'Informe o nome completo do envelope a ser consultado',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['getAll'],
      },
    },
  },
  {
    displayName: 'Filtro Data De Criação',
    name: 'created',
    type: 'string',
    default: '',
    description:
      'Informe os intervalos de datas de criação no padrão da especificação (ISO 8601 e separadas por vírgula)',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['getAll'],
      },
    },
  },
  {
    displayName: 'Filtro Data De Modificação',
    name: 'modified',
    type: 'string',
    default: '',
    description:
      'Informe os intervalos de datas de atualização no padrão da especificação (ISO 8601 e separadas por vírgula)',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['getAll'],
      },
    },
  },
  {
    displayName: 'Filtro Prazo Final',
    name: 'deadline',
    type: 'string',
    default: '',
    description:
      'Informe os intervalos de datas de deadline conforme padrão da especificação (ISO 8601 e separadas por vírgula)',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['getAll'],
      },
    },
  },
  {
    displayName: 'Ordenação',
    name: 'sort',
    type: 'string',
    default: '',
    description:
      'Ordene por propriedade do envelope (ex: name para ordenar por nome de forma crescente e -name para ordenar por nome de forma decrescente)',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['getAll'],
      },
    },
  },
];
