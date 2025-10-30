import { INodeProperties } from 'n8n-workflow';
import { t } from '../shared/translations';

export const eventOperations: INodeProperties = {
  displayName: t('operations'),
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  default: 'fromEnvelope',
  options: [
    {
      value: 'fromEnvelope',
      name: t('event.operations.fromEnvelope.name'),
      action: t('event.operations.fromEnvelope.action'),
      description: t('event.operations.fromEnvelope.description'),
    },
    {
      value: 'fromDocument',
      name: t('event.operations.fromDocument.name'),
      action: t('event.operations.fromDocument.action'),
      description: t('event.operations.fromDocument.description'),
    },
  ],
  displayOptions: {
    show: {
      resource: ['event'],
    },
  },
};
