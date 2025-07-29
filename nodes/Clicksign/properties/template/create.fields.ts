import { INodeProperties } from 'n8n-workflow';

export const createTemplateFields: INodeProperties[] = [
  {
    displayName: 'Nome',
    name: 'name',
    type: 'string',
    required: true,
    default: '',
    description: 'Define o nome do Modelo para facilitar consultas futuras',
    displayOptions: {
      show: {
        resource: ['template'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Arquivo Em Base 64',
    name: 'base64',
    type: 'string',
    required: true,
    default: '',
    description:
      'Conteúdo do arquivo em formato base 64 que está sendo enviado para a Clicksign',
    displayOptions: {
      show: {
        resource: ['template'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Cor',
    name: 'color',
    type: 'color',
    default: '#1474f5',
    description: 'A cor de identificação do template',
    displayOptions: {
      show: {
        resource: ['template'],
        operation: ['create'],
      },
    },
  },
];
