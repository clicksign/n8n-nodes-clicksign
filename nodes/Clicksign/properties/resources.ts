import { INodeProperties } from 'n8n-workflow';

export const resourceOptions: INodeProperties = {
  displayName: 'Recurso',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Documento',
      value: 'document',
    },
    {
      name: 'Envelope',
      value: 'envelope',
    },
    {
      name: 'Notificação',
      value: 'notification',
    },
    {
      name: 'Requisito',
      value: 'requirement',
    },
    {
      name: 'Signatário',
      value: 'signer',
    },
  ],
  default: 'envelope',
};
