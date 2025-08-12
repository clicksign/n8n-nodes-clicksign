import { watcherOperations } from './operations';

import { createWatcherFields } from './create.fields';
import { getAllWatchersFields } from './getAll.fields';
import { getWatcherDetailsFields } from './getDetails.fields';

export const watcher = [
  watcherOperations,
  ...createWatcherFields,
  ...getAllWatchersFields,
  ...getWatcherDetailsFields,
];
