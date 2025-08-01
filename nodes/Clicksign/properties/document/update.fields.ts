import { INodeProperties } from 'n8n-workflow';

export const updateDocumentFields: INodeProperties[] = [
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
        operation: ['update'],
      },
    },
  },
  {
    displayName: 'Documento ID',
    name: 'documentId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do documento que deseja atualizar',
    displayOptions: {
      show: {
        resource: ['document'],
        operation: ['update'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'options',
    default: 'canceled',
    description:
      'Só é possível alterar status de documentos running (em progresso/ativados)',
    displayOptions: {
      show: {
        resource: ['document'],
        operation: ['update'],
      },
    },
    options: [
      {
        name: 'Cancelado',
        value: 'canceled',
      },
      {
        name: 'Finalizado',
        value: 'closed',
      },
    ],
  },
  {
    displayName: 'Metadata',
    name: 'metadata',
    type: 'json',
    default: '{}',
    description:
      'JSON com metadados que são utilizados nos retornos de documentos via webhooks',
    displayOptions: {
      show: {
        resource: ['document'],
        operation: ['update'],
      },
    },
  },
];
