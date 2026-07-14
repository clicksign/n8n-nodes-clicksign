import { IExecuteFunctions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

type EmailCustomizationInput = {
  subject?: string;
  head?: string;
  greeting?: string;
  principal?: string;
  button?: string;
  final?: string;
  align?: string;
  showToken?: boolean;
  showQrcode?: boolean;
  showDetails?: boolean;
};

export function buildEmailCustomization(ef: IExecuteFunctions) {
  const emailCustomization = getNodeParameterTyped<EmailCustomizationInput>(
    ef,
    'emailCustomization',
  );

  if (!emailCustomization || Object.keys(emailCustomization).length === 0) {
    return undefined;
  }

  return {
    subject: emailCustomization.subject,
    head: emailCustomization.head,
    greeting: emailCustomization.greeting,
    principal: emailCustomization.principal,
    button: emailCustomization.button,
    final: emailCustomization.final,
    align: emailCustomization.align,
    show_token: emailCustomization.showToken,
    show_qrcode: emailCustomization.showQrcode,
    show_details: emailCustomization.showDetails,
  };
}
