import { INodeProperties } from 'n8n-workflow';

export const deleteDocumentFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que possui o documento',
    displayOptions: {
      show: {
        resource: ['document'],
        operation: ['delete'],
      },
    },
  },
  {
    displayName: 'Documento ID',
    name: 'documentId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do documento que deseja excluir',
    displayOptions: {
      show: {
        resource: ['document'],
        operation: ['delete'],
      },
    },
  },
];
