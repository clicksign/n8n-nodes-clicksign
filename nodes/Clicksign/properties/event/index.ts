import { eventOperations } from './operations';

import { fromEnvelopeFields } from './fromEnvelope.fields';

export const event = [eventOperations, ...fromEnvelopeFields];
