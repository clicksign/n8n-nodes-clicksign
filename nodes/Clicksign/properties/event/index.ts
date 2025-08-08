import { eventOperations } from './operations';

import { fromEnvelopeFields } from './fromEnvelope.fields';
import { fromDocumentFields } from './fromDocument.fields';

export const event = [
  eventOperations,
  ...fromEnvelopeFields,
  ...fromDocumentFields,
];
