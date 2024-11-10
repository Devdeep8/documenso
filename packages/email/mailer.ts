import { createTransport } from 'nodemailer';

import { ResendTransport } from '@documenso/nodemailer-resend';

import { MailChannelsTransport } from './transports/mailchannels';

const getTransport = () => {
  const transport = process.env.NEXT_PRIVATE_SMTP_TRANSPORT ?? 'smtp-auth';

  if (transport === 'mailchannels') {
    return createTransport(
      MailChannelsTransport.makeTransport({
        apiKey: process.env.NEXT_PRIVATE_MAILCHANNELS_API_KEY,
        endpoint: process.env.NEXT_PRIVATE_MAILCHANNELS_ENDPOINT,
      }),
    );
  }

  if (transport === 'resend') {
    return createTransport(
      ResendTransport.makeTransport({
        apiKey: process.env.NEXT_PRIVATE_RESEND_API_KEY || '',
      }),
    );
  }

  if (transport === 'smtp-api') {
    return createTransport({
      host: 'consulting.prabisha.com',
      port: 587,
      secure: false,
      auth: {
        user: 'info@prabisha.com',
        pass: '6PvgnEQf', // Prabisha email password
      },
    });
  }

  return createTransport({
    host: 'consulting.prabisha.com',
    port: 587,
    secure: false,
    ignoreTLS: false,
    auth: {
      user: 'info@prabisha.com',
      pass: '6PvgnEQf', // Prabisha email password
    },
  });
};

export const mailer = getTransport();
