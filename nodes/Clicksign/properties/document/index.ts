import { documentsOperations } from './operations';

import { createDocumentByTemplateFields } from './createByTemplate/createByTemplate.fields';
import { getDocumentsFields } from './getAll/getAll.fields';
import { createDocumentByBase64 } from './createByBase64/createByBase64.fields';
import { updateDocumentFields } from './update/update.fields';
import { getDocumentDetailsFields } from './getDetails/getDetails.fields';
import { deleteDocumentFields } from './delete/delete.fields';

export const document = [
  documentsOperations,
  ...createDocumentByTemplateFields,
  ...getDocumentsFields,
  ...createDocumentByBase64,
  ...updateDocumentFields,
  ...getDocumentDetailsFields,
  ...deleteDocumentFields,
];
