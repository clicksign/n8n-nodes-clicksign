import { INodeProperties } from 'n8n-workflow';

export const deleteRequirementFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que possui os requisitos',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['requirement'],
      },
    },
  },
  {
    displayName: 'Requisito ID',
    name: 'requirementId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Requisito que deseja excluir',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['requirement'],
      },
    },
  },
];
