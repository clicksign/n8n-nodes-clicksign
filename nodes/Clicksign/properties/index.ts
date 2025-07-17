import { resourceOptions } from './resources';

import { envelope } from './envelope';
import { signer } from './signer';

export const clicksignProperties = [resourceOptions, ...envelope, ...signer];
