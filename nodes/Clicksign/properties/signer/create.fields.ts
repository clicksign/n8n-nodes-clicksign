import { INodeProperties } from 'n8n-workflow';

export const createSignerFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do envelope ao qual será adicionado o signatário',
    displayOptions: {
      show: {
        resource: ['signer'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Nome',
    name: 'name',
    type: 'string',
    default: '',
    placeholder: 'Silva Silveira',
    description:
      'O nome do signatário, usado para identificá-lo (é necessário enviar ao menos duas palavras)',
    displayOptions: {
      show: {
        resource: ['signer'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: '',
    placeholder: 'silva@email.com',
    description:
      'O email do signatário (obrigatório quando houver configuração de notificação por email)',
    displayOptions: {
      show: {
        resource: ['signer'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Telefone',
    name: 'phoneNumber',
    type: 'string',
    default: '',
    placeholder: '11999999999',
    description:
      'Número de telefone do signatário, que deve possuir 10 ou 11 números (obrigatório quando houver configuração de notificação que exija telefone)',
    displayOptions: {
      show: {
        resource: ['signer'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Possui CPF',
    name: 'hasDocumentation',
    type: 'boolean',
    default: true,
    // eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
    description:
      'Define se o signatário deve informar CPF e Data de nascimento',
    displayOptions: {
      show: {
        resource: ['signer'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'CPF',
    name: 'documentation',
    type: 'string',
    default: '',
    placeholder: '17498999064',
    description: 'O CPF do signatário',
    displayOptions: {
      show: {
        resource: ['signer'],
        operation: ['create'],
        hasDocumentation: [true],
      },
    },
  },
  {
    displayName: 'Data De Nascimento',
    name: 'birthday',
    type: 'dateTime',
    default: null,
    placeholder: '1990-10-10',
    description: 'Data de nascimento do signatário',
    displayOptions: {
      show: {
        resource: ['signer'],
        operation: ['create'],
        hasDocumentation: [true],
      },
    },
  },
  {
    displayName: 'Grupo',
    name: 'group',
    type: 'number',
    default: 1,
    description:
      'Determina em qual grupo o signatário deve ser vinculado, conforme ordem de assinatura',
    displayOptions: {
      show: {
        resource: ['signer'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Permitir Recusar a Solicitação De Assinatura',
    name: 'refusable',
    type: 'boolean',
    default: false,
    // eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
    description: 'Define se o signatário pode recusar a solicitação',
    displayOptions: {
      show: {
        resource: ['signer'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Localização Necessária',
    name: 'locationRequired',
    type: 'boolean',
    default: false,
    // eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
    description:
      'Determina se o signatário deve compartilhar sua localização no momento da assinatura',
    displayOptions: {
      show: {
        resource: ['signer'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Notificação De Eventos',
    name: 'communicateEvents',
    type: 'fixedCollection',
    description: 'Configura notificações ao signatário',
    default: {
      signature_request: 'email',
      signature_reminder: 'email',
      document_signed: 'email',
    },
    displayOptions: {
      show: {
        resource: ['signer'],
        operation: ['create'],
      },
    },
    options: [
      {
        displayName: 'Configuração De Notificações',
        name: 'events',
        values: [
          {
            displayName: 'Solicitação De Assinatura',
            name: 'signature_request',
            type: 'options',
            options: [
              {
                name: 'Nenhum',
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
            displayName: 'Lembrete De Assinatura',
            name: 'signature_reminder',
            type: 'options',
            options: [
              {
                name: 'Nenhum',
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
            displayName: 'Documento Assinado',
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
