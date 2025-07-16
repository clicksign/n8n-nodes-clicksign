import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';
import { clicksignProperties } from './properties';

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
        '=https://{{$credentials.clicksign_environment}}.clicksign.com/api/v3',
      url: '',
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        Authorization: '={{$credentials.clicksign_access_token}}',
      },
    },
    properties: clicksignProperties,
  };
}
