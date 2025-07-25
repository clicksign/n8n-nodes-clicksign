import { documentsOperations } from './operations';

import { createDocumentByTemplateFields } from './createByTemplate.fields';
import { getDocumentsFields } from './getAll.fields';
import { createDocumentByBase64 } from './createByBase64.fields';

export const document = [
  documentsOperations,
  ...createDocumentByTemplateFields,
  ...getDocumentsFields,
  ...createDocumentByBase64,
];
