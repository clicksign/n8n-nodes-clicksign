import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const deleteTemplateFields: INodeProperties[] = [
  {
    displayName: t('template.fields.delete.templateId.displayName'),
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: t('template.fields.delete.templateId.description'),
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['template'],
      },
    },
  },
];
