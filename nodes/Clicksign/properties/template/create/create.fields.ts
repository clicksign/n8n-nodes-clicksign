import { INodeProperties } from 'n8n-workflow';
import { templateColors } from '../shared/colors.options';
import { t } from '../../shared/translations';

export const createTemplateFields: INodeProperties[] = [
  {
    displayName: t('template.fields.create.name.displayName'),
    name: 'name',
    type: 'string',
    required: true,
    default: '',
    description: t('template.fields.create.name.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['template'],
      },
    },
  },
  {
    displayName: t('template.fields.create.base64.displayName'),
    name: 'base64',
    type: 'string',
    required: true,
    default: '',
    description: t('template.fields.create.base64.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['template'],
      },
    },
  },
  {
    displayName: t('template.fields.create.color.displayName'),
    name: 'color',
    type: 'options',
    default: '',
    description: t('template.fields.create.color.description'),
    options: templateColors,
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['template'],
      },
    },
  },
];
