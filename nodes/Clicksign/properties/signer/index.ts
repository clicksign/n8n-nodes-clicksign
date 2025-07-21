import { signerOperations } from './operations';

import { createSignerFields } from './create.fields';

export const signer = [signerOperations, ...createSignerFields];
