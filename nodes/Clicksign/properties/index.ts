import { resourceOptions } from './resources';

import { envelope } from './envelope';
import { signer } from './signer';
import { documents } from './documents';

export const clicksignProperties = [
  resourceOptions,
  ...envelope,
  ...signer,
  ...documents,
];
