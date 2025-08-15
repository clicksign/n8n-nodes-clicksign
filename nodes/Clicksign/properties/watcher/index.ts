import { watcherOperations } from './operations';

import { createWatcherFields } from './create/create.fields';
import { getAllWatchersFields } from './getAll/getAll.fields';
import { getWatcherDetailsFields } from './getDetails/getDetails.fields';
import { deleteWatcherFields } from './delete/delete.fields';

export const watcher = [
  watcherOperations,
  ...createWatcherFields,
  ...getAllWatchersFields,
  ...getWatcherDetailsFields,
  ...deleteWatcherFields,
];
