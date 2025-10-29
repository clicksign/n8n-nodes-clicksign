import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getRequirementDetailsFields: INodeProperties[] = [
  {
    displayName: t('requirement.fields.getDetails.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('requirement.fields.getDetails.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['requirement'],
      },
    },
  },
  {
    displayName: t('requirement.fields.getDetails.requirementId.displayName'),
    name: 'requirementId',
    type: 'string',
    required: true,
    default: '',
    description: t('requirement.fields.getDetails.requirementId.description'),
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['requirement'],
      },
    },
  },
];
