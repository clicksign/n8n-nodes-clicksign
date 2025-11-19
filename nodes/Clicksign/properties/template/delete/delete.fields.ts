import { INodeProperties } from 'n8n-workflow';

export const deleteTemplateFields: INodeProperties[] = [
  {
    displayName: 'Template ID',
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Template to be deleted',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['template'],
      },
    },
  },
];
