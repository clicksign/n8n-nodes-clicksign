import { notificationOperations } from './operations';

import { notifyEnvelopeFields } from './notifyEnvelope.fields';
import { notifySignerFields } from './notifySigner.fields';

export const notification = [
  notificationOperations,
  ...notifyEnvelopeFields,
  ...notifySignerFields,
];
