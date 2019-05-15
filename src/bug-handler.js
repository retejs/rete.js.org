import * as Sentry from '@sentry/browser';
import * as SentryIntegrations from '@sentry/integrations';

const dsn = 'https://41d8b37116ff4a9dbf1d0acdd4d4c3ba@sentry.io/1457700';

if(process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn,
    integrations: [new SentryIntegrations.Vue()]
  });
}

export function openReportDialog() {
  Sentry.captureException(new Error('User Feedback Submitted'))
  Sentry.showReportDialog({
    title: 'Report a bug or typo',
    dsn
  });
}
