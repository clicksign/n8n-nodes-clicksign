import { eventOperations } from './operations';

import { fromEnvelopeFields } from './fromEnvelope/fromEnvelope.fields';
import { fromDocumentFields } from './fromDocument/fromDocument.fields';

export const event = [
  eventOperations,
  ...fromEnvelopeFields,
  ...fromDocumentFields,
];
