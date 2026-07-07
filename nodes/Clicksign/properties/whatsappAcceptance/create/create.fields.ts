import { INodeProperties } from 'n8n-workflow';

export const createWhatsappAcceptanceFields: INodeProperties[] = [
  {
    displayName: 'Title',
    name: 'title',
    type: 'string',
    required: true,
    default: '',
    description: 'Title of the acceptance term',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['whatsappAcceptance'],
      },
    },
  },
  {
    displayName: 'Sender Name Option',
    name: 'senderNameOption',
    type: 'options',
    required: true,
    default: 'account_name',
    description: 'Defines how the sender will be identified to the signer',
    options: [
      { name: 'User Name', value: 'user_name' },
      { name: 'Account Name', value: 'account_name' },
      { name: 'User and Account Name', value: 'user_and_account_name' },
    ],
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['whatsappAcceptance'],
      },
    },
  },
  {
    displayName: 'Message',
    name: 'message',
    type: 'string',
    required: true,
    default: '',
    description: 'Message that will be sent to the signer via WhatsApp',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['whatsappAcceptance'],
      },
    },
  },
  {
    displayName: 'Signer Phone',
    name: 'signerPhone',
    type: 'string',
    required: true,
    default: '',
    placeholder: '11987654321',
    description: "The signer's phone number",
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['whatsappAcceptance'],
      },
    },
  },
  {
    displayName: 'Signer Name',
    name: 'signerName',
    type: 'string',
    required: true,
    default: '',
    description: "The signer's name",
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['whatsappAcceptance'],
      },
    },
  },
];
