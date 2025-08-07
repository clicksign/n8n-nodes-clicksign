import { INodeProperties } from 'n8n-workflow';

export const deleteTemplateFields: INodeProperties[] = [
  {
    displayName: 'Modelo ID',
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Modelo a ser excluído',
    displayOptions: {
      show: {
        resource: ['template'],
        operation: ['delete'],
      },
    },
  },
];
