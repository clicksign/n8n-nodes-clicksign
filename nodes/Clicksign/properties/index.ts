import { resourceOptions } from './resources';

import { envelope } from './envelope';
import { document } from './document';
import { signer } from './signer';
import { requirement } from './requirement';

export const clicksignProperties = [
  resourceOptions,
  ...envelope,
  ...document,
  ...signer,
  ...requirement,
];
