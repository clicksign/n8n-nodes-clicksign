import { folderOperations } from './operations';

import { createFolderFields } from './create/create.fields';
import { getAllFoldersFields } from './getAll/getAll.fields';
import { getDetailsFolderFields } from './getDetails/getDetails.fields';

export const folder = [
  folderOperations,
  ...createFolderFields,
  ...getAllFoldersFields,
  ...getDetailsFolderFields,
];
