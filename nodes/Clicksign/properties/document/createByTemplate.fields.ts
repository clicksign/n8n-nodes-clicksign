import { INodeProperties } from 'n8n-workflow';

export const createDocumentByTemplateFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do envelope no qual o documento será adicionado',
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Nome Do Arquivo (.docx)',
    name: 'filename',
    type: 'string',
    required: true,
    default: '',
    placeholder: 'arquivo',
    description: 'Nome do arquivo com extensão .docx',
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Template ID',
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Modelo utilizado para a criação',
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Variáveis Do Modelo',
    name: 'templateData',
    type: 'json',
    default: '{}',
    description: 'JSON com chave e valor dos valores que alimentarão o modelo',
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
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
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
];
