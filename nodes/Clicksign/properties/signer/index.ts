import { signerOperations } from './operations';

import { createSignerFields } from './create.fields';
import { getAllSignersFields } from './getAll.fields';
import { getSignerDetailsFields } from './getDetails.fields';
import { deleteSignerFields } from './delete.fields';
import { createAutoSignatureFields } from './createAutoSignature.fields';

export const signer = [
  signerOperations,
  ...createSignerFields,
  ...getAllSignersFields,
  ...getSignerDetailsFields,
  ...deleteSignerFields,
  ...createAutoSignatureFields,
];
