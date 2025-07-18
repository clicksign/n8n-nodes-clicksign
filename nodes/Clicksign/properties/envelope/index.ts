import { envelopeOperations } from './operations';

import { createEnvelopeFields } from './createEnvelope.fields';

export const envelope = [envelopeOperations, ...createEnvelopeFields];
