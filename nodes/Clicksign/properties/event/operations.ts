import { INodeProperties } from 'n8n-workflow';
import { t } from '../shared/translations';

export const eventOperations: INodeProperties = {
  displayName: t('operations'),
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: t('event.operations.fromEnvelope.name'),
      value: t('event.operations.fromEnvelope.value'),
      action: t('event.operations.fromEnvelope.action'),
      description: t('event.operations.fromEnvelope.description'),
    },
    {
      name: t('event.operations.fromDocument.name'),
      value: t('event.operations.fromDocument.value'),
      action: t('event.operations.fromDocument.action'),
      description: t('event.operations.fromDocument.description'),
    },
  ],
  default: 'fromEnvelope',
  displayOptions: {
    show: {
      resource: ['event'],
    },
  },
};
