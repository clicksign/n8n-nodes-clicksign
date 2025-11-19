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
];
