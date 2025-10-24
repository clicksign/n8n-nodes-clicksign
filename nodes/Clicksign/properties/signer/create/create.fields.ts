import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const createSignerFields: INodeProperties[] = [
  {
    displayName: t('signer.fields.create.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('signer.fields.create.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.create.name.displayName'),
    name: 'name',
    type: 'string',
    default: '',
    placeholder: 'John Doe',
    required: true,
    description: t('signer.fields.create.name.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.create.email.displayName'),
    name: 'email',
    type: 'string',
    default: '',
    placeholder: 'john@email.com',
    required: true,
    description: t('signer.fields.create.email.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.create.phoneNumber.displayName'),
    name: 'phoneNumber',
    type: 'string',
    default: '',
    placeholder: '11999999999',
    description: t('signer.fields.create.phoneNumber.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.create.hasDocumentation.displayName'),
    name: 'hasDocumentation',
    type: 'boolean',
    default: true,
    description: t('signer.fields.create.hasDocumentation.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.create.documentation.displayName'),
    name: 'documentation',
    type: 'string',
    default: '',
    placeholder: '17498999064',
    description: t('signer.fields.create.documentation.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
        hasDocumentation: [true],
      },
    },
  },
  {
    displayName: t('signer.fields.create.birthday.displayName'),
    name: 'birthday',
    type: 'string',
    default: '',
    placeholder: '10/10/1990',
    description: t('signer.fields.create.birthday.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
        hasDocumentation: [true],
      },
    },
  },
  {
    displayName: t('signer.fields.create.group.displayName'),
    name: 'group',
    type: 'number',
    default: 1,
    description: t('signer.fields.create.group.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.create.refusable.displayName'),
    name: 'refusable',
    type: 'boolean',
    default: false,
    description: t('signer.fields.create.refusable.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.create.locationRequired.displayName'),
    name: 'locationRequired',
    type: 'boolean',
    default: false,
    description: t('signer.fields.create.locationRequired.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.create.communicateEvents.displayName'),
    name: 'communicateEvents',
    type: 'fixedCollection',
    description: t('signer.fields.create.communicateEvents.description'),
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
        displayName: t(
          'signer.fields.create.communicateEvents.events.displayName',
        ),
        name: 'events',
        values: [
          {
            displayName: t(
              'signer.fields.create.communicateEvents.events.signature_request',
            ),
            name: 'signature_request',
            type: 'options',
            options: [
              {
                name: t('signer.fields.create.communicateEvents.events.none'),
                value: 'none',
              },
              {
                name: t('signer.fields.create.communicateEvents.events.email'),
                value: 'email',
              },
              {
                name: t(
                  'signer.fields.create.communicateEvents.events.whatsapp',
                ),
                value: 'whatsapp',
              },
              {
                name: t('signer.fields.create.communicateEvents.events.sms'),
                value: 'sms',
              },
            ],
            // eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
            default: 'email',
          },
          {
            displayName: t(
              'signer.fields.create.communicateEvents.events.signature_reminder',
            ),
            name: 'signature_reminder',
            type: 'options',
            options: [
              {
                name: t('signer.fields.create.communicateEvents.events.none'),
                value: 'none',
              },
              {
                name: t('signer.fields.create.communicateEvents.events.email'),
                value: 'email',
              },
            ],
            // eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
            default: 'email',
          },
          {
            displayName: t(
              'signer.fields.create.communicateEvents.events.document_signed',
            ),
            name: 'document_signed',
            type: 'options',
            options: [
              {
                name: t('signer.fields.create.communicateEvents.events.email'),
                value: 'email',
              },
              {
                name: t(
                  'signer.fields.create.communicateEvents.events.whatsapp',
                ),
                value: 'whatsapp',
              },
            ],
            // eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
            default: 'email',
          },
        ],
      },
    ],
  },
];
