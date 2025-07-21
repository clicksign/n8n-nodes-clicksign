import { resourceOptions } from './resources';

import { envelope } from './envelope';
import { signer } from './signer';
import { documents } from './document';

export const clicksignProperties = [
  resourceOptions,
  ...envelope,
  ...signer,
  ...documents,
];
