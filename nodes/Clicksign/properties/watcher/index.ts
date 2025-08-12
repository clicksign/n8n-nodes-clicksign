import { watcherOperations } from './operations';

import { createWatcherFields } from './create.fields';
import { getAllWatchersFields } from './getAll.fields';

export const watcher = [
  watcherOperations,
  ...createWatcherFields,
  ...getAllWatchersFields,
];
