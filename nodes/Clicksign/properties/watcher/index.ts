import { watcherOperations } from './operations';

import { createWatcherFields } from './create.fields';

export const watcher = [watcherOperations, ...createWatcherFields];
