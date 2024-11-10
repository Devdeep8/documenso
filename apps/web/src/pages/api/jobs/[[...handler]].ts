import { jobsClient } from '@documenso/lib/jobs/client';

export const config = {
  maxDuration: 60,
  api: {
    bodyParser: false,
  },
};

export default jobsClient.getApiHandler();
