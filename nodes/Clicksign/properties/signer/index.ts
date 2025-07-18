import { signerOperations } from './operations';

import { createSignerFields } from './createSigner.fields';

export const signer = [signerOperations, ...createSignerFields];
