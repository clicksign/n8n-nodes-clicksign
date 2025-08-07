import { templateOperations } from './operations';

import { createTemplateFields } from './create.fields';
import { updateTemplateFields } from './update.fields';
import { getTemplateDetailsFields } from './getDetails.fields';
import { deleteTemplateFields } from './delete.fields';

export const template = [
  templateOperations,
  ...createTemplateFields,
  ...updateTemplateFields,
  ...getTemplateDetailsFields,
  ...deleteTemplateFields,
];
