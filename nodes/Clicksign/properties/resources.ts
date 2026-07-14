import { INodeProperties } from 'n8n-workflow';

export const resourceOptions: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  default: 'envelope',
  options: [
    {
      name: 'Document',
      value: 'document',
    },
    {
      name: 'Envelope',
      value: 'envelope',
    },
    {
      name: 'Event',
      value: 'event',
    },
    {
      name: 'Folder',
      value: 'folder',
    },
    {
      name: 'Membership',
      value: 'membership',
    },
    {
      name: 'Notification',
      value: 'notification',
    },
    {
      name: 'Requirement',
      value: 'requirement',
    },
    {
      name: 'Signer',
      value: 'signer',
    },
    {
      name: 'Template',
      value: 'template',
    },
    {
      name: 'User',
      value: 'user',
    },
    {
      name: 'Watcher',
      value: 'watcher',
    },
    {
      name: 'Webhook',
      value: 'webhook',
    },
    {
      name: 'WhatsApp Acceptance Term',
      value: 'whatsappAcceptance',
    },
  ],
};
