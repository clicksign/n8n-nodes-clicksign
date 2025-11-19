import { INodeProperties } from 'n8n-workflow';

export const getTemplateDetailsFields: INodeProperties[] = [
  {
    displayName: 'Template ID',
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Template whose details you want to get',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['template'],
      },
    },
  },
];
