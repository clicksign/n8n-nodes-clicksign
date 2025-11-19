import { INodeProperties } from 'n8n-workflow';

export const getRequirementDetailsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description:
      'ID of the envelope for which you want to list the requirements',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['requirement'],
      },
    },
  },
  {
    displayName: 'Requirement ID',
    name: 'requirementId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Requirement you want to view',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['requirement'],
      },
    },
  },
];
