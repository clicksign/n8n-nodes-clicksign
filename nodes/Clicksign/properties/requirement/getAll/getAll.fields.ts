import { INodeProperties } from 'n8n-workflow';

export const getAllRequirementFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    default: '',
    required: true,
    description:
      'ID of the envelope for which you want to list the requirements',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['requirement'],
      },
    },
  },
];
