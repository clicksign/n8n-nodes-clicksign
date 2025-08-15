import { INodeProperties } from 'n8n-workflow';
import { templateColors } from '../shared/colors.options';

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
        operation: ['create'],
        resource: ['template'],
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
        operation: ['create'],
        resource: ['template'],
      },
    },
  },
  {
    displayName: 'Cor',
    name: 'color',
    type: 'options',
    default: '',
    description: 'A cor de identificação do template',
    options: templateColors,
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['template'],
      },
    },
  },
];
