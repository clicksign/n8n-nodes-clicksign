import { documentsOperations } from './operations';

import { createDocumentByTemplateFields } from './createByTemplate.fields';
import { getDocumentsFields } from './getAll.fields';

export const document = [
  documentsOperations,
  ...createDocumentByTemplateFields,
  ...getDocumentsFields,
];
