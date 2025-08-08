import { INodeProperties } from 'n8n-workflow';

export const fromDocumentFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description:
      'ID do envelope ao qual o documento pertence para consultar eventos',
    displayOptions: {
      show: {
        resource: ['event'],
        operation: ['fromDocument'],
      },
    },
  },
  {
    displayName: 'Documento ID',
    name: 'documentId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Documento que deseja listar os eventos',
    displayOptions: {
      show: {
        resource: ['event'],
        operation: ['fromDocument'],
      },
    },
  },
];
