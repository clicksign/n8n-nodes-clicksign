import type {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from 'n8n-workflow';
import { NodeApiError, NodeConnectionType } from 'n8n-workflow';

import { clicksignProperties } from './properties';
import { getNodeParameterTyped } from './properties/utils/getNodeParameterTyped';
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
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main],
    credentials: [
      {
        name: 'clicksignApi',
        required: true,
      },
    ],
    requestDefaults: {
      baseURL:
        '=https://{{$credentials.clicksignEnvironment}}.clicksign.com/api/v3',
      url: '',
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        Authorization: '={{$credentials.clicksignAccessToken}}',
      },
    },
    properties: clicksignProperties,
  };
  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const resource = getNodeParameterTyped<string>(this, 'resource');
    const operation = getNodeParameterTyped<string>(this, 'operation');
    const fn = resourceOperationsFunctions[resource][operation];

    if (!fn) {
      throw new NodeApiError(this.getNode(), {
        message: 'Operação não suportada.',
        description: `A função "${operation}" para o recurso "${resource}" não é suportada!`,
      });
    }

    const responseData = await fn(this);

    return [this.helpers.returnJsonArray(responseData)];
  }
}
