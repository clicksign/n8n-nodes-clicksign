import { eventOperations } from './operations';

import { fromEnvelopeFields } from './fromEnvelope/fromEnvelope.fields';
import { fromDocumentFields } from './fromDocument/fromDocument.fields';
import { createCustomEventFields } from './createCustom/createCustom.fields';

export const event = [
  eventOperations,
  ...fromEnvelopeFields,
  ...fromDocumentFields,
  ...createCustomEventFields,
];
