import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getTemplateDetailsFields: INodeProperties[] = [
  {
    displayName: t('template.fields.getDetails.templateId.displayName'),
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: t('template.fields.getDetails.templateId.description'),
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['template'],
      },
    },
  },
];
