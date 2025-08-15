import { INodeProperties } from 'n8n-workflow';

export const getDocumentDetailsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que possui o documento',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Documento ID',
    name: 'documentId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do documento que deseja visualizar',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['document'],
      },
    },
  },
];
