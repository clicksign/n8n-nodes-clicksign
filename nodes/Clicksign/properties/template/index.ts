import { templateOperations } from './operations';

import { createTemplateFields } from './create/create.fields';
import { updateTemplateFields } from './update/update.fields';
import { getTemplateDetailsFields } from './getDetails/getDetails.fields';
import { deleteTemplateFields } from './delete/delete.fields';

export const template = [
  templateOperations,
  ...createTemplateFields,
  ...updateTemplateFields,
  ...getTemplateDetailsFields,
  ...deleteTemplateFields,
];
