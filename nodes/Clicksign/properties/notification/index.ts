import { notificationOperations } from './operations';

import { notifyEnvelopeFields } from './notifyEnvelope.fields';

export const notification = [notificationOperations, ...notifyEnvelopeFields];
