import { INodeProperties } from 'n8n-workflow';

export const createWatcherFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Envelope that will receive the watcher',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    placeholder: 'name@email.com',
    required: true,
    default: '',
    description: "Watcher's email",
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: 'Step to Be Notified',
    name: 'kind',
    type: 'options',
    required: true,
    default: 'all_steps',
    description:
      'Defines whether the watcher will be notified throughout the process or only upon completion',
    options: [
      {
        name: 'All Steps',
        value: 'all_steps',
      },
      {
        name: 'On Finish',
        value: 'on_finished',
      },
    ],
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: 'Send Attached Documents Upon Completion',
    name: 'attachDocuments',
    type: 'boolean',
    required: true,
    default: false,
    description:
      'Determines whether the watcher should receive the finished documents',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: 'Event Notification',
    name: 'communicateEvents',
    type: 'fixedCollection',
    default: {},
    description: 'Configures how the watcher is notified of events',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
    options: [
      {
        displayName: 'Notification Configuration',
        name: 'events',
        values: [
          {
            displayName: 'Document Sent',
            name: 'signature_watcher_document_sent',
            type: 'options',
            default: 'email',
            options: [
              { name: 'None', value: 'none' },
              { name: 'Email', value: 'email' },
            ],
          },
          {
            displayName: 'Document Signed',
            name: 'signature_watcher_document_signed',
            type: 'options',
            default: 'email',
            options: [
              { name: 'None', value: 'none' },
              { name: 'Email', value: 'email' },
            ],
          },
          {
            displayName: 'Document Deadline',
            name: 'signature_watcher_document_deadline',
            type: 'options',
            default: 'email',
            options: [
              { name: 'None', value: 'none' },
              { name: 'Email', value: 'email' },
            ],
          },
          {
            displayName: 'Document Canceled',
            name: 'signature_watcher_document_canceled',
            type: 'options',
            default: 'email',
            options: [
              { name: 'None', value: 'none' },
              { name: 'Email', value: 'email' },
            ],
          },
          {
            displayName: 'Envelope Closed',
            name: 'signature_watcher_envelope_closed',
            type: 'options',
            default: 'email',
            options: [
              { name: 'None', value: 'none' },
              { name: 'Email', value: 'email' },
            ],
          },
        ],
      },
    ],
  },
];
