import { INodeProperties } from 'n8n-workflow';

export const createDocumentByBase64: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do envelope no qual o documento será adicionado',
    displayOptions: {
      show: {
        operation: ['createByBase64'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Nome Do Arquivo (Com a Extensão)',
    name: 'filename',
    type: 'string',
    required: true,
    default: '',
    placeholder: 'arquivo.pdf',
    description: 'Nome do arquivo com extensão do arquivo',
    displayOptions: {
      show: {
        operation: ['createByBase64'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Arquivo Na Base64',
    name: 'fileBase64',
    type: 'string',
    required: true,
    default: '',
    description:
      'Base64 do arquivo desejado, consulte os formatos aceitos na documentação',
    displayOptions: {
      show: {
        operation: ['createByBase64'],
        resource: ['document'],
      },
    },
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
        operation: ['createByBase64'],
        resource: ['document'],
      },
    },
  },
];
