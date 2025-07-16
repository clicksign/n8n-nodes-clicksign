import { resourceOptions } from './resources';

import { envelopeOperations } from './envelope.operations';

import { createEnvelopeFields } from './envelope.fields.createEnvelope';
import { envelopeDocumentsFields } from './envelope.fields.envelopeDocuments';
import { createDocumentByTemplateFields } from './envelope.fields.createDocumentByTemplate';

export const clicksignProperties = [
  resourceOptions,
  envelopeOperations,
  ...createEnvelopeFields,
  ...envelopeDocumentsFields,
  ...createDocumentByTemplateFields,
];
