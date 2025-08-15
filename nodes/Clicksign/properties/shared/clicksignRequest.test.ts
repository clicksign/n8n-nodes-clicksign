import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';
import {
  clicksignRequest,
  ClicksignRequestResponse,
  ErrorResponse,
} from './clicksignRequest';

function isErrorResponse(
  response: ClicksignRequestResponse,
): response is ErrorResponse {
  return (response as ErrorResponse).error !== undefined;
}

describe('clicksignRequest', () => {
  let mockGetCredentials: jest.Mock;
  let mockRequest: jest.Mock;
  let mockContinueOnFail: jest.Mock;
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    mockGetCredentials = jest.fn();
    mockRequest = jest.fn();
    mockContinueOnFail = jest.fn();

    mockExecuteFunctions = {
      getCredentials: mockGetCredentials,
      helpers: {
        request: mockRequest,
      },
      continueOnFail: mockContinueOnFail,
      getNode: jest.fn(() => ({ name: 'TestNode', id: 'node123' })),
    } as unknown as IExecuteFunctions;
  });

  it('should make a successful API request and return formatted data', async () => {
    const mockCredentials = {
      clicksignEnvironment: 'sandbox',
      clicksignAccessToken: 'test-access-token-123',
    };
    const mockApiResponse = {
      id: 'doc456',
      status: 'created',
      url: 'http://example.com/doc',
    };
    const requestOptions: IRequestOptions = {
      uri: '/documents',
      method: 'POST',
      body: { filename: 'report.pdf' },
      headers: { 'X-Custom-Header': 'MyValue' },
    };

    mockGetCredentials.mockResolvedValue(mockCredentials);
    mockRequest.mockResolvedValue(mockApiResponse);

    const result: ClicksignRequestResponse = await clicksignRequest(
      mockExecuteFunctions,
      requestOptions,
    );

    expect(mockGetCredentials).toHaveBeenCalledWith('clicksignApi');
    expect(mockRequest).toHaveBeenCalledTimes(1);
    expect(mockRequest).toHaveBeenCalledWith({
      uri: 'https://sandbox.clicksign.com/api/v3/documents',
      method: 'POST',
      body: { filename: 'report.pdf' },
      json: true,
      headers: {
        Authorization: 'test-access-token-123',
        'X-Custom-Header': 'MyValue',
      },
    });

    if (!isErrorResponse(result)) {
      expect(result).toEqual(mockApiResponse);
    } else {
      fail('Expected a success response, but received an error response.');
    }
  });

  it('should handle API errors without a specific error code', async () => {
    const mockCredentials = {
      clicksignEnvironment: 'sandbox',
      clicksignAccessToken: 'generic-token',
    };
    const genericError = new Error('Something went wrong');
    const requestOptions: IRequestOptions = { uri: '/data', method: 'POST' };

    mockGetCredentials.mockResolvedValue(mockCredentials);
    mockRequest.mockRejectedValue(genericError);
    mockContinueOnFail.mockReturnValue(true);

    const result: ClicksignRequestResponse = await clicksignRequest(
      mockExecuteFunctions,
      requestOptions,
    );

    expect(isErrorResponse(result)).toBe(true);

    const expectedErrorData = {
      message: 'Something went wrong',
      details: 'Unexpected error occurred',
      code: 'UNKNOWN_ERROR',
      timestamp: expect.any(String),
    };

    if (isErrorResponse(result)) {
      expect(result.error).toEqual(expectedErrorData);
    } else {
      fail('Expected an error response, but received a success response.');
    }
  });

  it('should add Authorization header even if options.headers is undefined', async () => {
    const mockCredentials = {
      clicksignEnvironment: 'sandbox',
      clicksignAccessToken: 'token-no-headers',
    };
    const requestOptions: IRequestOptions = {
      uri: '/simple',
      method: 'GET',
    };

    mockGetCredentials.mockResolvedValue(mockCredentials);
    mockRequest.mockResolvedValue({});

    await clicksignRequest(mockExecuteFunctions, requestOptions);

    expect(mockRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        headers: {
          Authorization: 'token-no-headers',
        },
      }),
    );
  });
});
