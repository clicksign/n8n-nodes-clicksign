import { signerOperations } from './operations';

import { createSignerFields } from './create/create.fields';
import { getAllSignersFields } from './getAll/getAll.fields';
import { getSignerDetailsFields } from './getDetails/getDetails.fields';
import { deleteSignerFields } from './delete/delete.fields';
import { createAutoSignatureFields } from './createAutoSignature/createAutoSignature.fields';

export const signer = [
  signerOperations,
  ...createSignerFields,
  ...getAllSignersFields,
  ...getSignerDetailsFields,
  ...deleteSignerFields,
  ...createAutoSignatureFields,
];
