import { signerOperations } from './operations';

import { createSignerFields } from './create.fields';
import { getAllSignersFields } from './getAll.fields';

export const signer = [
  signerOperations,
  ...createSignerFields,
  ...getAllSignersFields,
];
