import type {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from 'n8n-workflow';
import { NodeApiError, NodeConnectionType } from 'n8n-workflow';
import { clicksignProperties } from './properties';
import { createSigner } from './properties/signer.execute.createSigner';

type ResourceOperationFunctions = {
  [resource: string]: {
    [operation: string]: (ef: IExecuteFunctions) => Promise<any>;
  };
};

const resourceOperationsFunctions: ResourceOperationFunctions = {
  'signer-api': {
    'create-signer': createSigner,
  },
};

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
    const resource = this.getNodeParameter('resource', 0) as string;
    const operation = this.getNodeParameter('operation', 0) as string;

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
