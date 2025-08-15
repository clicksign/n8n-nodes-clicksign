import { envelopeOperations } from './operations';

import { createEnvelopeFields } from './create/create.fields';
import { activateEnvelopeFields } from './activate/activate.fields';
import { getAllFields } from './getAll/getAll.fields';
import { getDetailsFields } from './getDetails/getDetails.fields';
import { updateEnvelopeFields } from './update/update.fields';
import { deleteEnvelopeFields } from './delete/delete.fields';

export const envelope = [
  envelopeOperations,
  ...createEnvelopeFields,
  ...activateEnvelopeFields,
  ...getAllFields,
  ...getDetailsFields,
  ...updateEnvelopeFields,
  ...deleteEnvelopeFields,
];
