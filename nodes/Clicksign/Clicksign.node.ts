import type {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from 'n8n-workflow';
import { NodeApiError, NodeConnectionTypes } from 'n8n-workflow';

import { clicksignProperties } from './properties';
import { getNodeParameterTyped } from './properties/shared/getNodeParameterTyped';
import { resourceOperationsFunctions } from './properties/executors';

export class Clicksign implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Clicksign',
    name: 'clicksign',
    icon: 'file:clicksign.svg',
    group: ['transform'],
    version: 1,
    description: 'Interact with Clicksign API',
    subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
    defaults: {
      name: 'Clicksign',
    },
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    credentials: [
      {
        name: 'clicksignApi',
        required: true,
      },
    ],
    properties: clicksignProperties,
  };
  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const resource = getNodeParameterTyped<string>(this, 'resource');
    const operation = getNodeParameterTyped<string>(this, 'operation');
    const fn = resourceOperationsFunctions[resource][operation];

    if (!fn) {
      throw new NodeApiError(this.getNode(), {
        message: 'Unsupported operation',
        description: `The function "${operation}" for resource "${resource}" is not supported!`,
      });
    }

    const responseData = await fn(this);

    if (!Array.isArray(responseData)) {
      return [this.helpers.returnJsonArray(responseData)];
    }

    const outputData: INodeExecutionData[] = responseData.map((data, index) => {
      return {
        json: data,
        pairedItem: {
          item: index,
        },
      };
    });

    return [outputData];
  }
}
