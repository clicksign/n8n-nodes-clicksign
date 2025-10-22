import { INodeProperties } from 'n8n-workflow';
import { getFieldName, getFieldDescription, getOptionName } from '../../shared/translations';

export const updateDocumentFields: INodeProperties[] = [
  {
    displayName: getFieldName('envelopeId'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: getFieldDescription('envelopeId'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: getFieldName('documentId'),
    name: 'documentId',
    type: 'string',
    required: true,
    default: '',
    description: getFieldDescription('documentId'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: getFieldName('status'),
    name: 'status',
    type: 'options',
    default: 'canceled',
    description: getFieldDescription('status'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['document'],
      },
    },
    options: [
      {
        name: getOptionName('canceled'),
        value: 'canceled',
      },
      {
        name: getOptionName('closed'),
        value: 'closed',
      },
    ],
  },
  {
    displayName: getFieldName('metadata'),
    name: 'metadata',
    type: 'json',
    default: '{}',
    description: getFieldDescription('metadata'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['document'],
      },
    },
  },
];
