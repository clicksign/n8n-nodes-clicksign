import { INodeProperties } from 'n8n-workflow';

export const notifySignerFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que possui o signatário',
    displayOptions: {
      show: {
        operation: ['notifySigner'],
        resource: ['notification'],
      },
    },
  },
  {
    displayName: 'Signatário ID',
    name: 'signerId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do signatário no envelope',
    displayOptions: {
      show: {
        operation: ['notifySigner'],
        resource: ['notification'],
      },
    },
  },
  {
    displayName: 'Mensagem',
    name: 'message',
    type: 'string',
    default: '',
    description:
      'Mensagem que deve ser enviada ao signatário, se o campo não for preenchido a mensagem enviada será a configurada no envelope#default_message',
    displayOptions: {
      show: {
        operation: ['notifySigner'],
        resource: ['notification'],
      },
    },
  },
];
