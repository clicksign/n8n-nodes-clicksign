import { documentsOperations } from './operations';

import { createDocumentByTemplateFields } from './createByTemplate.fields';
import { getDocumentsFields } from './getAll.fields';
import { createDocumentByBase64 } from './createByBase64.fields';
import { updateDocumentFields } from './update.fields';
import { getDocumentDetailsFields } from './getDetails.fields';

export const document = [
  documentsOperations,
  ...createDocumentByTemplateFields,
  ...getDocumentsFields,
  ...createDocumentByBase64,
  ...updateDocumentFields,
  ...getDocumentDetailsFields,
];
