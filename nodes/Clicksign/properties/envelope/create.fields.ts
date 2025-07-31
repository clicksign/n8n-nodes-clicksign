import { INodeProperties } from 'n8n-workflow';

export const createEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Nome',
    name: 'envelopeName',
    type: 'string',
    required: true,
    default: 'Meu envelope',
    description: 'Nome do envelope',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Idioma',
    name: 'locale',
    type: 'options',
    required: true,
    default: 'pt-BR',
    description:
      'Idioma utilizado nos e-mails, página de assinatura e log do documento',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['create'],
      },
    },
    options: [
      {
        name: 'Pt-BR',
        value: 'pt-BR',
      },
      {
        name: 'En-US',
        value: 'en-US',
      },
    ],
  },
  {
    displayName: 'Finalizar Automaticamente Após Todos Assinarem',
    name: 'autoClose',
    type: 'boolean',
    default: true,
    // eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
    description:
      'Se ativado, o envelope será fechado automaticamente após a assinatura do último signatários',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Intervalo De Lembrete',
    name: 'remindInterval',
    type: 'number',
    required: true,
    default: 3,
    description:
      'Determina se o documento terá opção de lembretes automáticos ativada (1,2,3,7,14)',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['create'],
      },
    },
    typeOptions: {
      integerOnly: true,
    },
  },
  {
    displayName: 'Bloqueio De Assinatura Após Recusa Por Signatário',
    name: 'blockAfterRefusal',
    type: 'boolean',
    default: false,
    // eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
    description:
      'Determina se o processo de assinatura tem que ser pausado ou não após um signatário ter recusado',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Prazo Final',
    name: 'deadlineAt',
    type: 'dateTime',
    default: null,
    description:
      'Data limite para o envelope e seus documentos (formato RFC 3339)',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Assunto Padrão',
    name: 'defaultSubject',
    type: 'string',
    default: '',
    description:
      'Define o assunto do e-mail que será enviado aos signatários na solicitação de assinatura',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Mensagem Padrão',
    name: 'defaultMessage',
    type: 'string',
    default: '',
    description: 'Define a mensagem padrão que será enviada aos signatários',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['create'],
      },
    },
  },
  {
    displayName: 'Pasta ID',
    name: 'folderId',
    type: 'string',
    default: '',
    description: 'ID da pasta de origem',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['create'],
      },
    },
  },
];
