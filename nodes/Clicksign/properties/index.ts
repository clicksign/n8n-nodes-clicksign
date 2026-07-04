import { resourceOptions } from './resources';

import { envelope } from './envelope';
import { document } from './document';
import { signer } from './signer';
import { requirement } from './requirement';
import { notification } from './notification';
import { template } from './template';
import { folder } from './folder';
import { event } from './event';
import { watcher } from './watcher';
import { webhook } from './webhook';
import { user } from './user';
import { membership } from './membership';
import { whatsappAcceptance } from './whatsappAcceptance';

export const clicksignProperties = [
  resourceOptions,
  ...envelope,
  ...document,
  ...signer,
  ...requirement,
  ...notification,
  ...template,
  ...folder,
  ...event,
  ...watcher,
  ...webhook,
  ...user,
  ...membership,
  ...whatsappAcceptance,
];
