import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getAllRequirementFields: INodeProperties[] = [
  {
    displayName: t('requirement.fields.getAll.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    default: '',
    required: true,
    description: t('requirement.fields.getAll.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['requirement'],
      },
    },
  },
];
