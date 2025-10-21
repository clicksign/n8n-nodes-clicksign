import {
  IExecuteFunctions,
  IHttpRequestOptions,
  NodeOperationError,
} from 'n8n-workflow';

export type SuccessResponse = Record<string, unknown>;

export type ErrorData = {
  message: string;
  details: string;
  code: string;
  timestamp: string;
};

export type ErrorResponse = {
  error: ErrorData;
};

export type ClicksignRequestResponse = SuccessResponse | ErrorResponse;

export async function clicksignRequest(
  executeFunctions: IExecuteFunctions,
  options: IHttpRequestOptions,
  errorMessage: string = 'Unexpected error occurred',
): Promise<ClicksignRequestResponse> {
  const credentials = await executeFunctions.getCredentials('clicksignApi');
  const environment = credentials.clicksignEnvironment;
  const accessToken = credentials.clicksignAccessToken;

  const requestOptions: IHttpRequestOptions = {
    ...options,
    headers: {
      Authorization: accessToken,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      ...(options.headers || {}),
    },
    json: true,
    url: `https://${environment}.clicksign.com/api/v3${options.url}`,
  };

  try {
    const response =
      await executeFunctions.helpers.httpRequestWithAuthentication.call(
        executeFunctions,
        'clicksignApi',
        requestOptions,
      );

    return response;
  } catch (error) {
    const errorData: ErrorData = {
      message: error.message,
      details: errorMessage,
      code: error.code || 'UNKNOWN_ERROR',
      timestamp: new Date().toISOString(),
    };

    if (!executeFunctions.continueOnFail()) {
      throw new NodeOperationError(executeFunctions.getNode(), error.message, {
        message: errorData.message,
        description: errorData.details,
      });
    }

    return {
      error: errorData,
    };
  }
}
