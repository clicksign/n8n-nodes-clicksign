import { signerOperations } from './operations';

import { createSignerFields } from './create.fields';
import { getAllSignersFields } from './getAll.fields';
import { getSignerDetailsFields } from './getDetails.fields';

export const signer = [
  signerOperations,
  ...createSignerFields,
  ...getAllSignersFields,
  ...getSignerDetailsFields,
];
