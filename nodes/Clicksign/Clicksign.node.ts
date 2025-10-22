import type {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from 'n8n-workflow';
<<<<<<< HEAD
import { NodeApiError, NodeConnectionTypes } from 'n8n-workflow';
=======
import { NodeApiError } from 'n8n-workflow';
>>>>>>> 592ecc6 (undo)

import { clicksignProperties } from './properties';
import { getNodeParameterTyped } from './properties/shared/getNodeParameterTyped';
import { resourceOperationsFunctions } from './properties/executors';
import { t } from './properties/shared/simpleTranslations';

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
<<<<<<< HEAD
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
=======
    inputs: ['main'],
    outputs: ['main'],
>>>>>>> 592ecc6 (undo)
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
<<<<<<< HEAD
        message: 'Unsupported operation',
        description: `The function "${operation}" for resource "${resource}" is not supported!`,
=======
        message: t('errors.unsupportedOperation'),
        description: t('errors.unsupportedOperationDescription', { operation, resource }),
>>>>>>> 592ecc6 (undo)
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
