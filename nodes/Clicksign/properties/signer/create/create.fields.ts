import { INodeProperties } from 'n8n-workflow';

export const createSignerFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope to which the signer will be added',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    placeholder: 'John Doe',
    required: true,
    description:
      "The signer's name, used to identify them (at least two words must be sent)",
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: '',
    placeholder: 'john@email.com',
    required: true,
    description:
      "The signer's email (required when email notification is configured)",
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Phone',
    name: 'phoneNumber',
    type: 'string',
    default: '',
    placeholder: '11999999999',
    description:
      "The signer's phone number, which must have 10 or 11 digits (required when notification setup requires phone)",
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Has CPF',
    name: 'hasDocumentation',
    type: 'boolean',
    default: true,
    description:
      'Defines whether the signer must provide CPF (Brazilian ID) and Date of Birth',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'CPF',
    name: 'documentation',
    type: 'string',
    default: '',
    placeholder: '17498999064',
    description: "The signer's CPF (Brazilian ID)",
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
        hasDocumentation: [true],
      },
    },
  },
  {
    displayName: 'Date Of Birth',
    name: 'birthday',
    type: 'string',
    default: '',
    placeholder: '10/10/1990',
    description: "Signer's date of birth (e.g.: DD/MM/YYYY, YYYY-MM-DD)",
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
        hasDocumentation: [true],
      },
    },
  },
  {
    displayName: 'Group',
    name: 'group',
    type: 'number',
    default: 1,
    description:
      'Determines which group the signer should be linked to, according to the signing order',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Allow Refusing The Signature Request',
    name: 'refusable',
    type: 'boolean',
    default: false,
    description: 'Defines whether the signer can refuse the request',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Location Required',
    name: 'locationRequired',
    type: 'boolean',
    default: false,
    description:
      'Determines if the signer must share their location at the time of signing',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Event Notification',
    name: 'communicateEvents',
    type: 'fixedCollection',
    description: 'Configures notifications to the signer',
    default: {
      signature_request: 'email',
      signature_reminder: 'email',
      document_signed: 'email',
    },
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
    options: [
      {
        displayName: 'Notification Configuration',
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
                name: 'Whatsapp',
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
                name: 'Whatsapp',
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
