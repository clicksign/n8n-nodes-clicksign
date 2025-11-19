import { INodeProperties } from 'n8n-workflow';
import { templateColors } from '../shared/colors.options';

export const updateTemplateFields: INodeProperties[] = [
  {
    displayName: 'Template ID',
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Template to be updated',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['template'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    description: 'Defines the Template name to facilitate future consultations',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['template'],
      },
    },
  },
  {
    displayName: 'Color',
    name: 'color',
    type: 'options',
    default: '',
    description: 'The identification color of the template',
    options: templateColors,
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['template'],
      },
    },
  },
];
