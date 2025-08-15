import { notificationOperations } from './operations';

import { notifyEnvelopeFields } from './notifyEnvelope/notifyEnvelope.fields';
import { notifySignerFields } from './notifySigner/notifySigner.fields';

export const notification = [
  notificationOperations,
  ...notifyEnvelopeFields,
  ...notifySignerFields,
];
