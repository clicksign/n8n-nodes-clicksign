import { INodeProperties } from 'n8n-workflow';

export const createCustomEventFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope that has the document',
    displayOptions: {
      show: {
        operation: ['createCustom'],
        resource: ['event'],
      },
    },
  },
  {
    displayName: 'Document ID',
    name: 'documentId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the document that will receive the event',
    displayOptions: {
      show: {
        operation: ['createCustom'],
        resource: ['event'],
      },
    },
  },
  {
    displayName: 'Event Type',
    name: 'eventType',
    type: 'options',
    required: true,
    default: 'custom',
    description: 'Type of event to create',
    options: [
      {
        name: 'Custom Token Event',
        value: 'custom',
      },
      {
        name: 'Add Image Event',
        value: 'add_image',
      },
    ],
    displayOptions: {
      show: {
        operation: ['createCustom'],
        resource: ['event'],
      },
    },
  },
  {
    displayName: 'Token Kind',
    name: 'tokenKind',
    type: 'options',
    required: true,
    default: 'token_email',
    description: 'Whether the event is for an email or SMS token',
    options: [
      { name: 'Token by Email', value: 'token_email' },
      { name: 'Token by SMS', value: 'token_sms' },
    ],
    displayOptions: {
      show: {
        operation: ['createCustom'],
        resource: ['event'],
        eventType: ['custom'],
      },
    },
  },
  {
    displayName: 'Occurred At',
    name: 'occurredAt',
    type: 'dateTime',
    required: true,
    default: '',
    description: 'Date and time the event occurred',
    displayOptions: {
      show: {
        operation: ['createCustom'],
        resource: ['event'],
        eventType: ['custom'],
      },
    },
  },
  {
    displayName: 'Signer Name',
    name: 'signerName',
    type: 'string',
    default: '',
    description: 'Name of the signer who took part in the event',
    displayOptions: {
      show: {
        operation: ['createCustom'],
        resource: ['event'],
        eventType: ['custom'],
      },
    },
  },
  {
    displayName: 'Signer Email',
    name: 'signerEmail',
    type: 'string',
    default: '',
    description: 'Email of the signer who took part in the event',
    displayOptions: {
      show: {
        operation: ['createCustom'],
        resource: ['event'],
        eventType: ['custom'],
      },
    },
  },
  {
    displayName: 'Signer Phone Number',
    name: 'signerPhoneNumber',
    type: 'string',
    default: '',
    description: 'Phone number of the signer who took part in the event',
    displayOptions: {
      show: {
        operation: ['createCustom'],
        resource: ['event'],
        eventType: ['custom'],
      },
    },
  },
  {
    displayName: 'Image Base64',
    name: 'imageBase64',
    type: 'string',
    required: true,
    default: '',
    description: 'Base64 (data URI) of the image to attach',
    displayOptions: {
      show: {
        operation: ['createCustom'],
        resource: ['event'],
        eventType: ['add_image'],
      },
    },
  },
  {
    displayName: 'Image Occurred At',
    name: 'imageOccurredAt',
    type: 'dateTime',
    default: '',
    description: 'Date and time the event occurred',
    displayOptions: {
      show: {
        operation: ['createCustom'],
        resource: ['event'],
        eventType: ['add_image'],
      },
    },
  },
  {
    displayName: 'Title',
    name: 'imageTitle',
    type: 'string',
    default: '',
    description: 'Title/description of the attached image',
    displayOptions: {
      show: {
        operation: ['createCustom'],
        resource: ['event'],
        eventType: ['add_image'],
      },
    },
  },
];
