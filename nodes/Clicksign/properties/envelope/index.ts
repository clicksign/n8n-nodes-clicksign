import { envelopeOperations } from './operations';

import { createEnvelopeFields } from './createEnvelope.fields';

import { activateEnvelopeFields } from './activateEnvelope.fields';

export const envelope = [
  envelopeOperations,
  ...createEnvelopeFields,
  ...activateEnvelopeFields,
];
