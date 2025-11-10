import { INodeProperties } from 'n8n-workflow';

export const requirementOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  default: 'addAuth',
  noDataExpression: true,
  options: [
    {
      name: 'Add Authentication',
      value: 'addAuth',
      action: 'Add authentication requirement',
      description: 'Add authentication requirement',
    },
    {
      name: 'Add Qualification',
      value: 'addQualification',
      action: 'Add qualification requirement',
      description: 'Add qualification requirement',
    },
    {
      name: 'Add Rubric',
      value: 'addRubric',
      action: 'Add rubric requirement',
      description: 'Add rubric requirement',
    },
    {
      name: 'Bulk Operations',
      value: 'bulk',
      action: 'Bulk operations',
    },
    {
      name: 'Delete',
      value: 'delete',
      action: 'Delete requirement',
      description: 'Delete requirement',
    },
    {
      name: 'Get Details',
      value: 'getDetails',
      action: 'Get requirement details',
      description: 'Get requirement details',
    },
    {
      name: 'List',
      value: 'getAll',
      action: 'List requirements',
      description: 'List requirements',
    },
  ],
  displayOptions: {
    show: {
      resource: ['requirement'],
    },
  },
};
