import { INodeProperties } from 'n8n-workflow';

export const resourceOptions: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Envelope',
      value: 'api-envelope',
    },
    {
      name: 'Signer',
      value: 'api-signatarios',
    },
    {
      name: 'Document',
      value: 'api-documentos',
    },
  ],
  default: 'api-envelope',
};
