import { INodeProperties } from 'n8n-workflow';

export const getTemplateDetailsFields: INodeProperties[] = [
  {
    displayName: 'Modelo ID',
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Modelo a ser detalhado',
    displayOptions: {
      show: {
        resource: ['template'],
        operation: ['getDetails'],
      },
    },
  },
];
