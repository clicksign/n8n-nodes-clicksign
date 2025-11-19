import { INodeProperties } from 'n8n-workflow';

export const watcherOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  default: 'getAll',
  noDataExpression: true,
  options: [
    {
      name: 'Create',
      value: 'create',
      action: 'Create watcher',
      description: 'Create watcher',
    },
    {
      name: 'List',
      value: 'getAll',
      action: 'List watchers',
      description: 'List watchers',
    },
    {
      name: 'Get Details',
      value: 'getDetails',
      action: 'Get watcher details',
      description: 'Get watcher details',
    },
    {
      name: 'Delete',
      value: 'delete',
      action: 'Delete watcher',
      description: 'Delete watcher',
    },
  ],
  displayOptions: {
    show: {
      resource: ['watcher'],
    },
  },
};
