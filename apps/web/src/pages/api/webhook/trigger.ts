import { handlerTriggerWebhooks } from '@documenso/lib/server-only/webhooks/trigger/handler';

export const config = {
  maxDuration: 60,
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
};

export default handlerTriggerWebhooks;
