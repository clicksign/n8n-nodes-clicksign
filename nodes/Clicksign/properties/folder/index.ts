import { folderOperations } from './operations';
import { createFolderFields } from './create.fields';

export const folder = [folderOperations, ...createFolderFields];
