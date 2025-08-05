import { folderOperations } from './operations';

import { createFolderFields } from './create.fields';
import { getAllFoldersFields } from './getAll.fields';
import { getDetailsFolderFields } from './getDetails.fields';

export const folder = [
  folderOperations,
  ...createFolderFields,
  ...getAllFoldersFields,
  ...getDetailsFolderFields,
];
