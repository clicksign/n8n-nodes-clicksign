import { INodeProperties } from 'n8n-workflow';

import { createEnvelopeOption } from './envelope.option.createEnvelope';
import { envelopeDocumentsOption } from './envelope.option.envelopeDocuments';
import { createDocumentByTemplateOption } from './envelope.option.createDocumentByTemplate';
import { listAllOption } from './envelope.option.listAll';

export const envelopeOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    createEnvelopeOption,
    envelopeDocumentsOption,
    listAllOption,
    createDocumentByTemplateOption,
  ],
  default: '',
  displayOptions: {
    show: {
      resource: ['envelopes'],
    },
  },
};
