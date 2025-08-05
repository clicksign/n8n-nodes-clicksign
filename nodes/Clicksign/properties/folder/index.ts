import { folderOperations } from './operations';

import { createFolderFields } from './create.fields';
import { getAllFoldersFields } from './getAll.fields';

export const folder = [
  folderOperations,
  ...createFolderFields,
  ...getAllFoldersFields,
];
