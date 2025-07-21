import { IExecuteFunctions } from 'n8n-workflow';

export function getNodeParameterTyped<T>(
  executeFunctions: IExecuteFunctions,
  parameterName: string,
  nodeIndex: number = 0,
): T {
  return executeFunctions.getNodeParameter(parameterName, nodeIndex) as T;
}
