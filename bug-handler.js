import * as Sentry from '@sentry/vue';
import { dsn } from './config/sentry';

export function openReportDialog(title) {
  Sentry.showReportDialog({
    title,
    dsn,
    eventId: Sentry.captureMessage('User\'s report'),
    subtitle: '',
    subtitle2: '',
  });
}
