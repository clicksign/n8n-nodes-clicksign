import { signerOperations } from './signer.operations';

import { createSignerFields } from './signer.fields.createSigner';

export const signer = [signerOperations, ...createSignerFields];
