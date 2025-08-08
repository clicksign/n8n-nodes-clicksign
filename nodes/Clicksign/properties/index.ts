import { resourceOptions } from './resources';

import { envelope } from './envelope';
import { document } from './document';
import { signer } from './signer';
import { requirement } from './requirement';
import { notification } from './notification';
import { template } from './template';
import { folder } from './folder';
import { event } from './event';

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
];
