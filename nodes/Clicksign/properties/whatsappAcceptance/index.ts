import { whatsappAcceptanceOperations } from './operations';

import { createWhatsappAcceptanceFields } from './create/create.fields';
import { getAllWhatsappAcceptanceFields } from './getAll/getAll.fields';
import { getDetailsWhatsappAcceptanceFields } from './getDetails/getDetails.fields';
import { updateWhatsappAcceptanceFields } from './update/update.fields';

export const whatsappAcceptance = [
  whatsappAcceptanceOperations,
  ...createWhatsappAcceptanceFields,
  ...getAllWhatsappAcceptanceFields,
  ...getDetailsWhatsappAcceptanceFields,
  ...updateWhatsappAcceptanceFields,
];
