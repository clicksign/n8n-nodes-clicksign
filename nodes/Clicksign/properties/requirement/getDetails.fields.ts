import { INodeProperties } from 'n8n-workflow';

export const getRequirementDetailsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que possui os requisitos',
    displayOptions: {
      show: {
        resource: ['requirement'],
        operation: ['getDetails'],
      },
    },
  },
  {
    displayName: 'Requisito ID',
    name: 'requirementId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Requisito que deseja visualizar',
    displayOptions: {
      show: {
        resource: ['requirement'],
        operation: ['getDetails'],
      },
    },
  },
];
