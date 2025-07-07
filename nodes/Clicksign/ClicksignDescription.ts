import { INodeProperties } from 'n8n-workflow';

// Operations for each resource
export const clicksignOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'List Envelopes',
				value: 'listAll',
				description: 'List all envelopes',
				action: 'List all envelopes',
        routing: {
					request: {
						method: 'GET',
						url: '/envelopes',
					},
				},
			},
      {
        name: 'List Documents in an Envelope',
        value: 'envelopeDocuments',
        description: 'List documents',
        action: 'List documents',
				displayOptions: {
					show: {
						resource: ['envelopes'],
						operation: ['envelopeDocuments'],
					},
				}
			},
			{
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
									deadline_at: '={{$parameter.deadlineAt ? DateTime.fromISO($parameter.deadlineAt).setZone($now.zoneName).toISO() : undefined}}'
								}
							}
						}
					}
				}
			}
		],
		default: 'listAll',
		required: true,
	}
];

const envelopeDocumentsOperation: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    displayOptions: {
      show: {
				resource: ['envelopes'],
        operation: ['envelopeDocuments']
      },
    },
		routing: {
			request: {
				method: 'GET',
				url: '=/envelopes/{{$parameter.envelopeId}}/documents',
			},
		},
  }
];

const createEnvelopeOperation: INodeProperties[] = [
	{
    displayName: 'Envelope Name',
    name: 'envelopeName',
		description: 'The name of the envelope',
    type: 'string',
    required: true,
    default: 'My First Envelope',
    displayOptions: {
      show: {
				resource: ['envelopes'],
        operation: ['createEnvelope']
      },
    },
	},
	{
		displayName: 'Locale',
		name: 'locale',
		description: 'The locale of the envelope',
		required: true,
		default: 'pt-BR',
		displayOptions: {
			show: {
				resource: ['envelopes'],
				operation: ['createEnvelope']
			},
		},
		type: 'options',
		options: [
			{
				name: 'Pt-BR',
				value: 'pt-BR',
			},
			{
				name: 'En-US',
				value: 'en-US',
			}
		],
	},
	{
		displayName: 'Auto Close',
		name: 'autoClose',
		description: 'Whether the envelope should be closed automatically when all signers have signed',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				resource: ['envelopes'],
				operation: ['createEnvelope']
			},
		},
	},
	{
		displayName: 'Remind Interval',
		name: 'remindInterval',
		description: 'The interval in days to remind the signer to sign the envelope',
		type: 'number',
		required: true,
		default: 3,
		displayOptions: {
			show: {
				resource: ['envelopes'],
				operation: ['createEnvelope']
			},
		},
		typeOptions: {
			integerOnly: true,
		},
	},
	{
		displayName: 'Block After Refusal',
		name: 'blockAfterRefusal',
		description: 'Whether the envelope should be blocked after the signer refuses to sign',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['envelopes'],
				operation: ['createEnvelope']
			},
		},
	},
	{
		displayName: 'Deadline At',
		name: 'deadlineAt',
		description: 'The deadline for the envelope',
		type: 'dateTime',
		default: undefined,
		displayOptions: {
			show: {
				resource: ['envelopes'],
				operation: ['createEnvelope']
			},
		}
	},
	{
		displayName: 'Default Subject',
		name: 'defaultSubject',
		description: 'The default subject of notification to be sent',
		type: 'string',
		default: undefined,
		displayOptions: {
			show: {
				resource: ['envelopes'],
				operation: ['createEnvelope']
			},
		}
	},
	{
		displayName: 'Default Message',
		name: 'defaultMessage',
		description: 'The default message of notification to be sent',
		type: 'string',
		default: undefined,
		displayOptions: {
			show: {
				resource: ['envelopes'],
				operation: ['createEnvelope']
			},
		}
	}
];

export const clicksignFields: INodeProperties[] = [
  ...envelopeDocumentsOperation,
	...createEnvelopeOperation,
];
