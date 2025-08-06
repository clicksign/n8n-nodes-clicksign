import { templateOperations } from './operations';

import { createTemplateFields } from './create.fields';
import { updateTemplateFields } from './update.fields';

export const template = [
  templateOperations,
  ...createTemplateFields,
  ...updateTemplateFields,
];
