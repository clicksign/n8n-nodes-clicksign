import type {
  ICredentialDataDecryptedObject,
  IHttpRequestOptions,
} from 'n8n-workflow';

import { ClicksignApi } from '../ClicksignApi.credentials';

describe('Clicksign API Credentials', () => {
  describe('properties', () => {
    const clicksign = new ClicksignApi();

    it('should have correct properties', () => {
      expect(clicksign.name).toBe('clicksignApi');
      expect(clicksign.displayName).toBe('Clicksign API');
      expect(clicksign.documentationUrl).toBe(
        'https://developers.clicksign.com/docs/primeiros-passos',
      );
      expect(clicksign.properties).toEqual([
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
            { name: 'Sandbox', value: 'sandbox' },
            { name: 'Production', value: 'app' },
          ],
          default: 'sandbox',
        },
      ]);
    });
  });

  describe('authenticate', () => {
    const clicksignApi = new ClicksignApi();

    it('should generate a valid query string with access token', async () => {
      const credentials: ICredentialDataDecryptedObject = {
        clicksign_access_token: 'test-access-token',
        clicksign_environment: 'sandbox',
      };

      const requestOptions: IHttpRequestOptions = {
        url: 'https://sandbox.clicksign.com/api/v3/envelopes',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const authProperty = clicksignApi.authenticate;

      const result = {
        ...requestOptions,
        qs: {
          access_token: credentials.clicksign_access_token,
        },
      };

      expect(result.qs?.access_token).toBe('test-access-token');
      expect(authProperty.type).toBe('generic');
      expect(authProperty.properties?.qs?.access_token).toBe(
        '={{$credentials.clicksign_access_token}}',
      );
    });
  });

  describe('test', () => {
    const clicksignApi = new ClicksignApi();

    it('should have a valid test property', () => {
      expect(clicksignApi.test).toBeDefined();
      expect(clicksignApi.test.request).toBeDefined();
      expect(clicksignApi.test.request.baseURL).toBe(
        '=https://{{$credentials.clicksign_environment}}.clicksign.com/api/v3/envelopes',
      );
      expect(clicksignApi.test.request.url).toBe('');
    });
  });
});
