import { INodeProperties } from 'n8n-workflow';
import { templateColors } from '../shared/colors.options';
import { t } from '../../shared/translations';

export const updateTemplateFields: INodeProperties[] = [
  {
    displayName: t('template.fields.update.templateId.displayName'),
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: t('template.fields.update.templateId.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['template'],
      },
    },
  },
  {
    displayName: t('template.fields.update.name.displayName'),
    name: 'name',
    type: 'string',
    default: '',
    description: t('template.fields.update.name.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['template'],
      },
    },
  },
  {
    displayName: t('template.fields.update.color.displayName'),
    name: 'color',
    type: 'options',
    default: '',
    description: t('template.fields.update.color.description'),
    options: templateColors,
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['template'],
      },
    },
  },
];
