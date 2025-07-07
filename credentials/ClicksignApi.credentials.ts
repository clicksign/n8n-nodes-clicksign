import {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class ClicksignApi implements ICredentialType {
  name = 'clicksignApi';
  displayName = 'Clicksign API';
  documentationUrl = 'https://developers.clicksign.com/docs/primeiros-passos';
  properties: INodeProperties[] = [
    {
      displayName: 'Access Token',
      name: 'clicksign_access_token',
      type: 'string',
      typeOptions: { password: true },
      default: '',
    },
    {
      displayName: 'Environment',
      name: 'clicksign_environment',
      type: 'options',
      options: [
        {
          name: 'Sandbox',
          value: 'sandbox',
        },
        {
          name: 'Production',
          value: 'app',
        },
      ],
      default: 'sandbox',
    },
  ];

  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      qs: {
        access_token: '={{$credentials.clicksign_access_token}}',
      },
    },
  };

  test: ICredentialTestRequest = {
    request: {
      baseURL: '=https://{{$credentials.clicksign_environment}}.clicksign.com/api/v3/envelopes',
      url: '',
    },
  };
}