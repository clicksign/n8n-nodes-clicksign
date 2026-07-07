import { INodeProperties } from 'n8n-workflow';

export function emailCustomizationFields(
  operation: string,
): INodeProperties[] {
  return [
    {
      displayName: 'Email Customization',
      name: 'emailCustomization',
      type: 'collection',
      placeholder: 'Add Field',
      default: {},
      description: 'Attributes that customize the email notification',
      displayOptions: {
        show: {
          operation: [operation],
          resource: ['notification'],
        },
      },
      options: [
        {
          displayName: 'Align',
          name: 'align',
          type: 'options',
          default: 'left',
          description: 'Determines the alignment of the email elements',
          options: [
            { name: 'Center', value: 'center' },
            { name: 'Justify', value: 'justify' },
            { name: 'Left', value: 'left' },
            { name: 'Right', value: 'right' },
          ],
        },
        {
          displayName: 'Button',
          name: 'button',
          type: 'string',
          default: '',
          description:
            'Determines the text on the button that directs the signer to sign (max: 50 chars)',
        },
        {
          displayName: 'Final',
          name: 'final',
          type: 'string',
          default: '',
          description:
            'Determines the final message after the button, present in the body of the email (max: 3000 chars)',
        },
        {
          displayName: 'Greeting',
          name: 'greeting',
          type: 'string',
          default: '',
          description:
            'Determines the greeting of the notification, present in the body of the email (max: 3000 chars)',
        },
        {
          displayName: 'Head',
          name: 'head',
          type: 'string',
          default: '',
          description:
            'Determines the header of the notification, present in the body of the email (max: 998 chars)',
        },
        {
          displayName: 'Principal',
          name: 'principal',
          type: 'string',
          default: '',
          description:
            'Determines the main message of the notification, present in the body of the email (max: 3000 chars)',
        },
        {
          displayName: 'Show Details',
          name: 'showDetails',
          type: 'boolean',
          default: false,
          description:
            'Whether details of the signature process should be displayed, printed after all the messages',
        },
        {
          displayName: 'Show QR Code',
          name: 'showQrcode',
          type: 'boolean',
          default: false,
          description:
            'Whether a QR Code is added to the body of the email, its content being the link to sign',
        },
        {
          displayName: 'Show Token',
          name: 'showToken',
          type: 'boolean',
          default: false,
          description:
            'Whether the token is displayed in the body of the email (when there is token authentication)',
        },
        {
          displayName: 'Subject',
          name: 'subject',
          type: 'string',
          default: '',
          description: 'Determines the subject of the email (max: 998 chars)',
        },
      ],
    },
  ];
}
