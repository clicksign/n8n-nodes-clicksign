import { envelopeOperations } from './operations';

import { createEnvelopeFields } from './create.fields';
import { activateEnvelopeFields } from './activate.fields';

export const envelope = [
  envelopeOperations,
  ...createEnvelopeFields,
  ...activateEnvelopeFields,
];
