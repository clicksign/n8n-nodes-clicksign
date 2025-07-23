import { INodeProperties } from 'n8n-workflow';

export const notifyEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que deseja notificar',
    displayOptions: {
      show: {
        resource: ['notification'],
        operation: ['notifyEnvelope'],
      },
    },
  },
  {
    displayName: 'Mensagem',
    name: 'message',
    type: 'string',
    default: '',
    description:
      'Mensagem que deve ser enviada aos signatários, se o campo não for preenchido a mensagem enviada será a configurada no envelope#default_message',
    displayOptions: {
      show: {
        resource: ['notification'],
        operation: ['notifyEnvelope'],
      },
    },
  },
];
