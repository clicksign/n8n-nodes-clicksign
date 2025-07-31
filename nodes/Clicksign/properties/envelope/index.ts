import { envelopeOperations } from './operations';

import { createEnvelopeFields } from './create.fields';
import { activateEnvelopeFields } from './activate.fields';
import { getAllFields } from './getAll.fields';
import { getDetailsFields } from './getDetails.fields';
import { updateEnvelopeFields } from './update.fields';
import { deleteEnvelopeFields } from './delete.fields';

export const envelope = [
  envelopeOperations,
  ...createEnvelopeFields,
  ...activateEnvelopeFields,
  ...getAllFields,
  ...getDetailsFields,
  ...updateEnvelopeFields,
  ...deleteEnvelopeFields,
];
