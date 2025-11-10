import { INodeProperties } from 'n8n-workflow';

export const deleteRequirementFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Envelope that contains the requirement',
    displayOptions: {
      show: {
        operation: ['delete'],
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
    description: 'ID of the Requirement you want to delete',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['requirement'],
      },
    },
  },
];
