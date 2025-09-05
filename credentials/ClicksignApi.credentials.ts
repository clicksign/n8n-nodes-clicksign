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
  icon = 'file:clicksign.svg' as const;

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
        // Essa variável é somente uma interpolação de string, ou seja, o $credentials.clicksignAccessToken representa uma variável
        // que será substituída por um valor em tempo de execução dentro do ambiente do n8n de forma segura
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
