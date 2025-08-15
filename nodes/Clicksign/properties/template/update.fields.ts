import { INodeProperties } from 'n8n-workflow';
import { templateColors } from './shared/colors.options';

export const updateTemplateFields: INodeProperties[] = [
  {
    displayName: 'Modelo ID',
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Modelo a ser atualizado',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['template'],
      },
    },
  },
  {
    displayName: 'Nome',
    name: 'name',
    type: 'string',
    default: '',
    description: 'Define o nome do Modelo para facilitar consultas futuras',
    displayOptions: {
      show: {
        operation: ['update'],
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
        operation: ['update'],
        resource: ['template'],
      },
    },
  },
];
