import {
  INodeProperties,
  INodePropertyCollection,
  INodePropertyOptions,
} from 'n8n-workflow';

export const createEnvelopeOption:
  | INodePropertyCollection
  | INodeProperties
  | INodePropertyOptions = {
  name: 'Create Envelope',
  value: 'createEnvelope',
  description: 'Create a new envelope',
  action: 'Create envelope',
  displayOptions: {
    show: {
      resource: ['envelopes'],
      operation: ['createEnvelope'],
    },
  },
  routing: {
    request: {
      url: '/envelopes',
      method: 'POST',
      body: {
        data: {
          type: 'envelopes',
          attributes: {
            name: '={{$parameter.envelopeName}}',
            locale: '={{$parameter.locale}}',
            auto_close: '={{$parameter.autoClose}}',
            remind_interval: '={{$parameter.remindInterval}}',
            block_after_refusal: '={{$parameter.blockAfterRefusal}}',
            deadline_at:
              '={{$parameter.deadlineAt ? DateTime.fromISO($parameter.deadlineAt).setZone($now.zoneName).toISO() : undefined}}',
          },
        },
      },
    },
  },
};
