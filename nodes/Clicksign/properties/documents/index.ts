import { documentsOperations } from './operations';

import { createDocumentByTemplateFields } from './createDocumentByTemplate.fields';
import { getDocumentsFields } from './getDocuments.fields';

export const documents = [
  documentsOperations,
  ...createDocumentByTemplateFields,
  ...getDocumentsFields,
];
