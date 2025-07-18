import { INodeProperties } from 'n8n-workflow';

export const createSignerFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    displayOptions: {
      show: {
        resource: ['api-signatarios'],
        operation: ['create-signer'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    placeholder: 'John Doe',
    displayOptions: {
      show: {
        resource: ['api-signatarios'],
        operation: ['create-signer'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: '',
    placeholder: 'john@email.com',
    displayOptions: {
      show: {
        resource: ['api-signatarios'],
        operation: ['create-signer'],
      },
    },
  },
  {
    displayName: 'Phone Number',
    name: 'phoneNumber',
    type: 'string',
    default: '',
    displayOptions: {
      show: {
        resource: ['api-signatarios'],
        operation: ['create-signer'],
      },
    },
  },
  {
    displayName: 'Has Documentation',
    name: 'hasDocumentation',
    type: 'boolean',
    default: true,
    displayOptions: {
      show: {
        resource: ['api-signatarios'],
        operation: ['create-signer'],
      },
    },
  },
  {
    displayName: 'Documentation',
    name: 'documentation',
    type: 'string',
    default: '',
    displayOptions: {
      show: {
        resource: ['api-signatarios'],
        operation: ['create-signer'],
        hasDocumentation: [true],
      },
    },
  },
  {
    displayName: 'Birthday',
    name: 'birthday',
    type: 'dateTime',
    default: null,
    placeholder: '1990-10-10',
    displayOptions: {
      show: {
        resource: ['api-signatarios'],
        operation: ['create-signer'],
        hasDocumentation: [true],
      },
    },
  },
  {
    displayName: 'Group',
    name: 'group',
    type: 'number',
    default: 1,
    displayOptions: {
      show: {
        resource: ['api-signatarios'],
        operation: ['create-signer'],
      },
    },
  },
  {
    displayName: 'Refusable',
    name: 'refusable',
    type: 'boolean',
    default: false,
    displayOptions: {
      show: {
        resource: ['api-signatarios'],
        operation: ['create-signer'],
      },
    },
  },
  {
    displayName: 'Location Required',
    name: 'locationRequired',
    type: 'boolean',
    default: false,
    displayOptions: {
      show: {
        resource: ['api-signatarios'],
        operation: ['create-signer'],
      },
    },
  },
  {
    displayName: 'Communicate Events',
    name: 'communicateEvents',
    type: 'fixedCollection',
    default: {
      signature_request: 'email',
      signature_reminder: 'email',
      document_signed: 'email',
    },
    displayOptions: {
      show: {
        resource: ['api-signatarios'],
        operation: ['create-signer'],
      },
    },
    options: [
      {
        displayName: 'Notifications Settings',
        name: 'events',
        values: [
          {
            displayName: 'Signature Request',
            name: 'signature_request',
            type: 'options',
            options: [
              {
                name: 'None',
                value: 'none',
              },
              {
                name: 'Email',
                value: 'email',
              },
              {
                name: 'WhatsApp',
                value: 'whatsapp',
              },
              {
                name: 'SMS',
                value: 'sms',
              },
            ],
            default: 'email',
          },
          {
            displayName: 'Signature Reminder',
            name: 'signature_reminder',
            type: 'options',
            options: [
              {
                name: 'None',
                value: 'none',
              },
              {
                name: 'Email',
                value: 'email',
              },
            ],
            default: 'email',
          },
          {
            displayName: 'Document Signed',
            name: 'document_signed',
            type: 'options',
            options: [
              {
                name: 'Email',
                value: 'email',
              },
              {
                name: 'WhatsApp',
                value: 'whatsapp',
              },
            ],
            default: 'email',
          },
        ],
      },
    ],
  },
];
