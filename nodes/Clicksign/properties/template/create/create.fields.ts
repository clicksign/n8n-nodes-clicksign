import { INodeProperties } from 'n8n-workflow';
import { templateColors } from '../shared/colors.options';

export const createTemplateFields: INodeProperties[] = [
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    required: true,
    default: '',
    description: 'Defines the Template name to facilitate future consultations',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['template'],
      },
    },
  },
  {
    displayName: 'File In Base 64',
    name: 'base64',
    type: 'string',
    required: true,
    default: '',
    description:
      'Content of the file in base 64 format that is being sent to Clicksign',
    displayOptions: {
      show: {
        operation: ['create'],
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
        operation: ['create'],
        resource: ['template'],
      },
    },
  },
];
