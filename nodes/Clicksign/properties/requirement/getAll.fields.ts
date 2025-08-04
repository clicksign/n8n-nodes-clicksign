import { INodeProperties } from 'n8n-workflow';

export const getAllRequirementFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    default: '',
    required: true,
    description: 'ID do envelope ao qual deseja listar os requisitos',
    displayOptions: {
      show: {
        resource: ['requirement'],
        operation: ['getAll'],
      },
    },
  },
];
