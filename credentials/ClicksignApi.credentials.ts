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
      name: 'clicksignAccessToken',
      type: 'string',
      typeOptions: { password: true },
      default: '',
    },
    {
      displayName: 'Environment',
      name: 'clicksignEnvironment',
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
        access_token: '={{$credentials.clicksignAccessToken}}',
      },
    },
  };

  test: ICredentialTestRequest = {
    request: {
      baseURL:
        '=https://{{$credentials.clicksignEnvironment}}.clicksign.com/api/v3/envelopes',
      url: '',
    },
  };
}
