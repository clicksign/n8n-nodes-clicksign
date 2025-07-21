import { INodeProperties } from 'n8n-workflow';

export const resourceOptions: INodeProperties = {
  displayName: 'Recurso',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Envelope',
      value: 'envelope',
    },
    {
      name: 'Signatário',
      value: 'signer',
    },
    {
      name: 'Documento',
      value: 'document',
    },
    {
      name: 'Requisito',
      value: 'requirement',
    },
  ],
  default: 'envelope',
};
